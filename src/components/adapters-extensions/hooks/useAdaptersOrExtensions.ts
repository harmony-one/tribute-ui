import {useCallback, useEffect, useState} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import {useSelector} from 'react-redux';

import {StoreState} from '../../../store/types';
import {AsyncStatus} from '../../../util/types';
import {Adapters, Extensions} from '../types';

import {GET_ADAPTERS_AND_EXTENSIONS} from '../../../gql';

import {
  defaultAdaptersAndExtensions,
  AdaptersAndExtensionsType,
} from '../config';
import {GQL_QUERY_POLLING_INTERVAL} from '../../../config';

import {DaoConstants} from '../enums';

export type AdapterType = {
  __typename: string;
  id: string;
  acl: string;
  adapterId: string;
  adapterAddress: string;
};

export type ExtensionType = {
  __typename: string;
  id: string;
  extensionId: string;
  extensionAddress: string;
};

type UseAdaptersOrExtensionsReturn = {
  adapterExtensionStatus: AsyncStatus;
  getAdapterOrExtensionFromRedux: (
    adapterName: DaoConstants
  ) => Record<string, any>;
  registeredAdaptersOrExtensions: AdapterType[] | undefined;
  unRegisteredAdaptersOrExtensions: Adapters[] | undefined;
};

export type AdaptersType = AdapterType & Adapters;
export type ExtensionsType = ExtensionType & Extensions;

/**
 * useAdaptersOrExtensions
 *
 * This component queries The Graph API to get the daos adapters.
 * It returns the available adapters filtered by a search on the current dao.
 *
 * @returns {UseAdaptersOrExtensionsReturn}
 */
export function useAdaptersOrExtensions(): UseAdaptersOrExtensionsReturn {
  /**
   * Selectors
   */
  const {DaoRegistryContract, ...adapterExtensionContracts} = useSelector(
    (s: StoreState) => s.contracts
  );

  /**
   * Their hooks
   */
  const [
    getRegisteredAdaptersAndExtensions,
    {called, data, error},
  ] = useLazyQuery(GET_ADAPTERS_AND_EXTENSIONS, {
    pollInterval: GQL_QUERY_POLLING_INTERVAL,
    variables: {daoAddress: DaoRegistryContract?.contractAddress.toLowerCase()},
  });

  /**
   * State
   */
  const [
    registeredAdaptersOrExtensions,
    setRegisteredAdaptersOrExtensions,
  ] = useState<AdapterType[] | undefined>();
  const [
    unRegisteredAdaptersOrExtensions,
    setUnRegisteredAdaptersOrExtensions,
  ] = useState<Adapters[] | undefined>();
  const [
    adapterExtensionStatus,
    setAdapterExtensionStatus,
  ] = useState<AsyncStatus>(AsyncStatus.STANDBY);

  const getAdaptersAndExtensionsCached = useCallback(
    getAdaptersAndExtensions,
    []
  );

  useEffect(() => {
    if (!called) {
      getRegisteredAdaptersAndExtensions();
    }
  }, [called, getRegisteredAdaptersAndExtensions]);

  // Get adapters and extensions from GQL
  useEffect(() => {
    if (!DaoRegistryContract?.contractAddress) return;

    try {
      setAdapterExtensionStatus(AsyncStatus.PENDING);

      if (data) {
        // extract adapters and extensions from gql data
        const {adapters, extensions} = data.molochv3S[0] as Record<string, any>;

        // create a list of registered and un-registered adapters and extensions
        const {
          registeredList,
          unRegisteredList,
        } = getAdaptersAndExtensionsCached(adapters, extensions);

        setRegisteredAdaptersOrExtensions(registeredList);
        setUnRegisteredAdaptersOrExtensions(unRegisteredList);

        // done; lets set status to fulfilled
        setAdapterExtensionStatus(AsyncStatus.FULFILLED);
      } else {
        if (error) {
          throw new Error(error.message);
        }
      }
    } catch (error) {
      setRegisteredAdaptersOrExtensions(undefined);
      setUnRegisteredAdaptersOrExtensions(undefined);

      setAdapterExtensionStatus(AsyncStatus.REJECTED);
    }
  }, [DaoRegistryContract, data, error, getAdaptersAndExtensionsCached]);

  /**
   * getAdaptersAndExtensions
   *
   * Find all registered and un-registered adapters and extensions
   *
   * @param registeredDaoAdapters
   * @param registeredDaoExtensions
   */
  function getAdaptersAndExtensions(
    registeredDaoAdapters: any,
    registeredDaoExtensions: any
  ): Record<string, any> {
    //@todo types

    let registeredList: AdaptersAndExtensionsType[] = [];
    let unRegisteredList: AdaptersAndExtensionsType[] = [];

    const getAdapterFromGql = (adapterId: string) => {
      return registeredDaoAdapters.find(
        (adapter: AdaptersAndExtensionsType) => {
          return adapter.adapterId?.toLowerCase() === adapterId?.toLowerCase();
        }
      );
    };

    const getExtensionFromGql = (extensionId: string) => {
      return registeredDaoExtensions.find(
        (extension: AdaptersAndExtensionsType) => {
          return (
            extension.extensionId?.toLowerCase() === extensionId?.toLowerCase()
          );
        }
      );
    };

    defaultAdaptersAndExtensions.forEach(
      (adapterOrExtension: AdaptersAndExtensionsType | any) => {
        if (adapterOrExtension?.isExtension) {
          // Add an extenaion
          const gqlExtension = getExtensionFromGql(
            adapterOrExtension.extensionId
          );

          if (gqlExtension) {
            registeredList.push({
              ...gqlExtension,
              ...adapterOrExtension,
              name: adapterOrExtension.name as DaoConstants,
              description: adapterOrExtension.description,
            } as AdaptersAndExtensionsType);
          } else {
            unRegisteredList.push({
              ...adapterOrExtension,
              name: adapterOrExtension.name as DaoConstants,
              description: adapterOrExtension.description,
            } as AdaptersAndExtensionsType);
          }
        } else if (adapterOrExtension?.options) {
          let shouldSkip = false;

          // Check options for adapters and extensions
          adapterOrExtension?.options?.forEach((option: any) => {
            if (shouldSkip) {
              return;
            }

            if (option?.isExtension) {
              const gqlExtension = getExtensionFromGql(option.extensionId);
              if (gqlExtension) {
                registeredList.push({
                  ...gqlExtension,
                  ...option,
                  name: option.name as DaoConstants,
                  description: option.description,
                } as AdaptersAndExtensionsType);

                shouldSkip = true;
                return;
              } else {
                unRegisteredList.push({
                  ...option,
                  name: option.name as DaoConstants,
                  description: option.description,
                } as AdaptersAndExtensionsType);
              }
            } else {
              const gqlAdapter = getAdapterFromGql(option.adapterId);
              if (gqlAdapter) {
                registeredList.push({
                  ...gqlAdapter,
                  ...option,
                  name: option.name as DaoConstants,
                  description: option.description,
                } as AdaptersAndExtensionsType);

                shouldSkip = true;
                return;
              } else {
                unRegisteredList.push({
                  ...option,
                  name: option.name as DaoConstants,
                  description: option.description,
                } as AdaptersAndExtensionsType);
              }
            }
          });
        } else {
          // Add an adapter
          const gqlAdapter = getAdapterFromGql(adapterOrExtension.adapterId);

          if (gqlAdapter) {
            registeredList.push({
              ...gqlAdapter,
              ...adapterOrExtension,
              name: adapterOrExtension.name as DaoConstants,
              description: adapterOrExtension.description,
            } as AdaptersAndExtensionsType);
          } else {
            unRegisteredList.push({
              ...adapterOrExtension,
              name: adapterOrExtension.name as DaoConstants,
              description: adapterOrExtension.description,
            } as AdaptersAndExtensionsType);
          }
        }
      }
    );

    return {
      registeredList,
      unRegisteredList,
    };
  }

  /**
   * getAdapterOrExtensionFromRedux
   *
   * @param adapterOrExtensionName DaoConstants
   */
  function getAdapterOrExtensionFromRedux(
    adapterOrExtensionName: DaoConstants
  ): Record<string, any> {
    return Object.keys(adapterExtensionContracts)
      .map((ae) => adapterExtensionContracts[ae])
      .filter((ae) => ae) // filter out any `null` objects
      .filter((ae) => ae.adapterOrExtensionName === adapterOrExtensionName)[0];
  }

  return {
    adapterExtensionStatus,
    getAdapterOrExtensionFromRedux,
    registeredAdaptersOrExtensions,
    unRegisteredAdaptersOrExtensions,
  };
}

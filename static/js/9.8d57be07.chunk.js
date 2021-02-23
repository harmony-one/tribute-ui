(this.webpackJsonptribute=this.webpackJsonptribute||[]).push([[9],{842:function(t){t.exports=JSON.parse('[{"inputs":[{"internalType":"contract VotingContract","name":"_c","type":"address"},{"internalType":"uint256","name":"_chainId","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ADAPTER_NAME","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EIP712_DOMAIN","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EIP712_DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROPOSAL_MESSAGE_TYPE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROPOSAL_MESSAGE_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROPOSAL_PAYLOAD_TYPE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROPOSAL_PAYLOAD_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VOTE_MESSAGE_TYPE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VOTE_MESSAGE_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VOTE_PAYLOAD_TYPE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VOTE_PAYLOAD_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VOTE_RESULT_NODE_TYPE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VOTE_RESULT_NODE_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VOTE_RESULT_ROOT_TYPE","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VOTE_RESULT_ROOT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"chainId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract DaoRegistry","name":"dao","type":"address"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"actionId","type":"address"}],"name":"domainSeparator","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"fallbackVoting","outputs":[{"internalType":"contract VotingContract","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"flags","type":"uint256"},{"internalType":"uint256","name":"flag","type":"uint256"}],"name":"getFlag","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"hash","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"recover","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"flags","type":"uint256"},{"internalType":"uint256","name":"flag","type":"uint256"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setFlag","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"votes","outputs":[{"internalType":"uint256","name":"snapshot","type":"uint256"},{"internalType":"bytes32","name":"proposalHash","type":"bytes32"},{"internalType":"address","name":"reporter","type":"address"},{"internalType":"bytes32","name":"resultRoot","type":"bytes32"},{"internalType":"uint256","name":"nbVoters","type":"uint256"},{"internalType":"uint256","name":"nbYes","type":"uint256"},{"internalType":"uint256","name":"nbNo","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"startingTime","type":"uint256"},{"internalType":"uint256","name":"gracePeriodStartingTime","type":"uint256"},{"internalType":"bool","name":"isChallenged","type":"bool"},{"internalType":"uint256","name":"fallbackVotesCount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAdapterName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"contract DaoRegistry","name":"dao","type":"address"},{"internalType":"address","name":"actionId","type":"address"}],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract DaoRegistry","name":"dao","type":"address"},{"internalType":"address","name":"actionId","type":"address"},{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bytes32","name":"spaceHash","type":"bytes32"},{"components":[{"internalType":"bytes32","name":"nameHash","type":"bytes32"},{"internalType":"bytes32","name":"bodyHash","type":"bytes32"},{"internalType":"string[]","name":"choices","type":"string[]"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"string","name":"snapshot","type":"string"}],"internalType":"struct OffchainVotingContract.ProposalPayload","name":"payload","type":"tuple"},{"internalType":"bytes","name":"sig","type":"bytes"}],"internalType":"struct OffchainVotingContract.ProposalMessage","name":"message","type":"tuple"}],"name":"hashMessage","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract DaoRegistry","name":"dao","type":"address"},{"internalType":"uint256","name":"chainId","type":"uint256"},{"internalType":"address","name":"actionId","type":"address"},{"internalType":"bytes32","name":"message","type":"bytes32"}],"name":"hashMessage","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"contract DaoRegistry","name":"dao","type":"address"},{"internalType":"address","name":"actionId","type":"address"},{"internalType":"bytes32","name":"resultRoot","type":"bytes32"}],"name":"hashResultRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bytes32","name":"spaceHash","type":"bytes32"},{"components":[{"internalType":"bytes32","name":"nameHash","type":"bytes32"},{"internalType":"bytes32","name":"bodyHash","type":"bytes32"},{"internalType":"string[]","name":"choices","type":"string[]"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"string","name":"snapshot","type":"string"}],"internalType":"struct OffchainVotingContract.ProposalPayload","name":"payload","type":"tuple"},{"internalType":"bytes","name":"sig","type":"bytes"}],"internalType":"struct OffchainVotingContract.ProposalMessage","name":"message","type":"tuple"}],"name":"hashProposalMessage","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"internalType":"bytes32","name":"nameHash","type":"bytes32"},{"internalType":"bytes32","name":"bodyHash","type":"bytes32"},{"internalType":"string[]","name":"choices","type":"string[]"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"},{"internalType":"string","name":"snapshot","type":"string"}],"internalType":"struct OffchainVotingContract.ProposalPayload","name":"payload","type":"tuple"}],"name":"hashProposalPayload","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"contract DaoRegistry","name":"dao","type":"address"},{"internalType":"address","name":"actionId","type":"address"},{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"components":[{"internalType":"uint256","name":"choice","type":"uint256"},{"internalType":"bytes32","name":"proposalHash","type":"bytes32"}],"internalType":"struct OffchainVotingContract.VotePayload","name":"payload","type":"tuple"}],"internalType":"struct OffchainVotingContract.VoteMessage","name":"message","type":"tuple"}],"name":"hashVote","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"components":[{"internalType":"uint256","name":"choice","type":"uint256"},{"internalType":"bytes32","name":"proposalHash","type":"bytes32"}],"internalType":"struct OffchainVotingContract.VotePayload","name":"payload","type":"tuple"}],"internalType":"struct OffchainVotingContract.VoteMessage","name":"message","type":"tuple"}],"name":"hashVoteInternal","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"choice","type":"uint256"},{"internalType":"bytes32","name":"proposalHash","type":"bytes32"}],"internalType":"struct OffchainVotingContract.VotePayload","name":"payload","type":"tuple"}],"name":"hashVotePayload","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"nbNo","type":"uint256"},{"internalType":"uint256","name":"nbYes","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"},{"internalType":"bytes","name":"rootSig","type":"bytes"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"choice","type":"uint256"},{"internalType":"bytes32","name":"proposalHash","type":"bytes32"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"internalType":"struct OffchainVotingContract.VoteResultNode","name":"node","type":"tuple"}],"name":"hashVotingResultNode","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"contract DaoRegistry","name":"dao","type":"address"},{"internalType":"address","name":"actionId","type":"address"},{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"nbNo","type":"uint256"},{"internalType":"uint256","name":"nbYes","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"},{"internalType":"bytes","name":"rootSig","type":"bytes"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"choice","type":"uint256"},{"internalType":"bytes32","name":"proposalHash","type":"bytes32"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"internalType":"struct OffchainVotingContract.VoteResultNode","name":"node","type":"tuple"}],"name":"nodeHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract DaoRegistry","name":"dao","type":"address"},{"internalType":"uint256","name":"votingPeriod","type":"uint256"},{"internalType":"uint256","name":"gracePeriod","type":"uint256"},{"internalType":"uint256","name":"fallbackThreshold","type":"uint256"}],"name":"configureDao","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract DaoRegistry","name":"dao","type":"address"},{"internalType":"bytes32","name":"proposalId","type":"bytes32"},{"internalType":"bytes32","name":"resultRoot","type":"bytes32"},{"components":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"nbNo","type":"uint256"},{"internalType":"uint256","name":"nbYes","type":"uint256"},{"internalType":"bytes","name":"sig","type":"bytes"},{"internalType":"bytes","name":"rootSig","type":"bytes"},{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"uint256","name":"choice","type":"uint256"},{"internalType":"bytes32","name":"proposalHash","type":"bytes32"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"internalType":"struct OffchainVotingContract.VoteResultNode","name":"result","type":"tuple"}],"name":"submitVoteResult","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract DaoRegistry","name":"dao","type":"address"},{"internalType":"address","name":"actionId","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"address","name":"","type":"address"}],"name":"getSenderAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract DaoRegistry","name":"dao","type":"address"},{"internalType":"bytes32","name":"proposalId","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"startNewVotingForProposal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract DaoRegistry","name":"dao","type":"address"},{"internalType":"bytes32","name":"proposalId","type":"bytes32"}],"name":"voteResult","outputs":[{"internalType":"enum IVoting.VotingState","name":"state","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract DaoRegistry","name":"dao","type":"address"},{"internalType":"bytes32","name":"proposalId","type":"bytes32"}],"name":"requestFallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"snapshotRoot","type":"bytes32"},{"internalType":"address","name":"dao","type":"address"},{"internalType":"bytes32","name":"proposalId","type":"bytes32"}],"name":"getSignedHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"snapshotRoot","type":"bytes32"},{"internalType":"address","name":"dao","type":"address"},{"internalType":"bytes32","name":"proposalId","type":"bytes32"},{"internalType":"bytes","name":"sig","type":"bytes"}],"name":"getSignedAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"root","type":"bytes32"},{"internalType":"bytes32","name":"leaf","type":"bytes32"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"verify","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"}]')}}]);
//# sourceMappingURL=9.8d57be07.chunk.js.map
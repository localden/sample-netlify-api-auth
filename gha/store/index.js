export const state = () => ({
    repositoryList: null
})

export const mutations = {
    setRepositoryList(state, repositoryList) {
      state.repositoryList = repositoryList
    }
}
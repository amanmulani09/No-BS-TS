export default function index() {
  enum loadingStage {
    beforeLoad = "beforeLoad",
    loading = "loading",
    loaded = "loaded",
  }

  const isLoading = (state: loadingStage): boolean =>
    state === loadingStage.loading;

  console.log(isLoading(loadingStage.beforeLoad));
}

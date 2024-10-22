declare type ContentState = {
  contents: ContentType[];
};

declare type ShowStateType = {
  projects: ShowCaseType[];
  isfetching: boolean;
  fetchError: string | unknown;
};

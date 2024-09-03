interface Window {
    fbAsyncInit: () => void;
    FB: {
      init: (options: { appId: number; xfbml: boolean; version: string }) => void;
    };
  }
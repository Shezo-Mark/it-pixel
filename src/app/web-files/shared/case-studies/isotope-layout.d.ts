declare module 'isotope-layout' {
  interface IsotopeOptions {
    itemSelector?: string;
    layoutMode?: string;
    // Add more options as needed from Isotope's documentation
  }

  export default class Isotope {
    constructor(element: Element | string, options?: IsotopeOptions);
    arrange: (options?: { filter?: string }) => void;
    destroy: () => void;
    // Add other methods as needed based on Isotope's documentation
  }
}

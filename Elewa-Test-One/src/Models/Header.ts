/**
 * Interface for  Header data
 * @interface
 * @property {string[]} links - this is an array containing the navigation(id, text and urls)
 * @property {string} logo - Logo
 */
export interface Header {
    logo: string;
    links: {
      id: number;
      text: string;
      url: string;
    }[];
  }
  
  


/**
 * Interface for  Footer  data with nested objects and arrays
 * @interface
 * @property {string} address - 
 * @property {string} phone - text
 * @property {string} email - Text
 * @property {string} navigation - array
 * @property {string}  brands - array
 * @property {string} privacy - Text
 * @property {string} facebook - Text
 * @property {string}  instagram - Text
 * @property {string} linkedin - Text
 * 
 */
export interface Footer {
    Headquarters: {
      headquarters: string;  
      address: string;
    };
    Contact: {
      contact:string;  
      phone: string;
      email: string;
    };
    Navigation: string[];
    Brands: string[];
    Privacy: string[];
    logo: string;
    SocialMediaLogos: {
        
      facebook: string;
      instagram: string;
      linkedin: string;
    };
  }
  
  
  
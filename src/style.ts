interface Styling {
  Text : {
    normal: string;
    small: string;
    smallest: string;
    heading: string;
    subHeading: string;
    body: string;
  },
  layout: {
    sectionItems: string
  }
}
  
export const layout: Styling['layout'] = {
  sectionItems: "grid md:grid-cols-2 md:flex sm:flex-row-reverse w-full",
}
    
export const text: Styling['Text'] = {
  normal: "lg:text-sm xs:text-xs text-dimWhite",
  small: "text-xs lg:text-ss text-dimWhite",
  smallest: "text-xs lg:text-sst text-dimWhite",
  heading: "lg:text-4xl sm:text-xl xs:text-lg text-dimWhite",
  subHeading: "lg:text-xl sm:text-ss md:text-ss xs:text-xs text-black font-light text-dimWhite text-center",
  body: "font-normal text-gray-500 text-xs text-dimWhite",
};
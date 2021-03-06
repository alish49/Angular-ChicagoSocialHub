
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


/// This file and the source code provided can be used only for   
/// the projects and assignments of this course

/// Last Edit by Dr. Atef Bader: 1/30/2019


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////



export interface Place {
   map(arg0: (d: any) => any): ReadonlyArray<string>;
    name: String;
    display_phone: String;
    address1: String;
    is_closed: String;
    rating: Number;
    review_count: String;
    latitude: Number;    
    longitude: Number;
}

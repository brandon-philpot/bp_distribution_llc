import { IconLookup, SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface IconLookupAdditionalInterface extends IconLookup {
    stroke: string;
    color: string;
    size: SizeProp;
}

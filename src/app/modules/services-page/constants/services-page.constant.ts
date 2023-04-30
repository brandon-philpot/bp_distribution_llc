import { ServiceInterface } from '../interfaces';

export const SERVICES_PAGE_TITLE: string = 'BP DISTRIBUTION | SERVICES';
export const SERVICES: ServiceInterface[] = [
    {
        id: 'service-distribution-network-channel',
        isFAIcon: true,
        faIconLookup: {
            prefix: 'fas',
            iconName: 'building-circle-arrow-right',
            stroke: 'black',
            color: 'black',
            size: 'lg'
        },
        ariaLabelIcon: 'Distribution Channel',
        title: 'Distribution Network Channel',
        description: `Let us find the distribution network for you, ` +
                     `allowing you to focus on your business. We handle ` +
                     `everything down to shipping to a disclosed location. ` +
                     `We also offer local pick and courier service if ` +
                     `located in San Antonio, TX.`
    },
    {
        id: 'service-warehouse-space',
        isFAIcon: true,
        faIconLookup: {
            prefix: 'fas',
            iconName: 'warehouse',
            stroke: 'black',
            color: 'black',
            size: 'lg'
        },
        ariaLabelIcon: 'Warehouse',
        title: 'Warehouse Space',
        description: `Up to 1 week free warehouse space if needed during ` +
                     `shipping phase. $100 each week there after.`
    },
    {
        id: 'service-shipping',
        isFAIcon: true,
        faIconLookup: {
            prefix: 'fas',
            iconName: 'truck-fast',
            stroke: 'black',
            color: 'black',
            size: 'lg'
        },
        ariaLabelIcon: 'Shipping',
        title: 'Shipping',
        description: `Freight - Cheapest quote from (Shiply, Clear Lane Freight, J.B. Hunt Transport, FedEx, UPS)\n` +
                     `Packages - Cheapest quote from (USPS, UPS, FedEx, DHL)\n` +
                     `Courier - Only in San Antonio, TX (COURIERS TEXAS)\n` +
                     `Local Pickup - Require notice of 4 hours to have shipment ready for pickup`
    },
    {
        id: 'service-products',
        isFAIcon: true,
        faIconLookup: {
            prefix: 'fas',
            iconName: 'boxes-stacked',
            stroke: 'black',
            color: 'black',
            size: 'lg'
        },
        ariaLabelIcon: 'Products',
        title: 'Products',
        description: `We have products that we have already sourced and willing to ` +
                     `hear reasonable offers on price adjustments.`
    }
];

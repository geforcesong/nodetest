const date = new Date();
const cdnUrl = '';
const appUrl = '';
const staticUrl = '', listingOfficeName='';
const year = date.getFullYear();
const updateDate = date.getDate() + '/' + (date.getMonth() + 1);
const currentDate = updateDate;

const data = {
    12: {
        description: 'CCAR MLS',
        disclaimer:
            'Contra Costa Association of REALTORS®<br/>IDX information is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that the data is deemed reliable but is not guaranteed accurate by the MLS.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    100: {
        description: 'MLS Listings',
        disclaimer:
            'MLSListings Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the Internet Data Exchange program of the MLSListings Inc MLS system. Copyright (C) ' +
            year +
            ', MLSListings Inc - All rights reserved.',
        disclaimerDPP:
            '<a href="https://www.MLSListings.com" rel="nofollow">Copyright MLSListings Inc © ' +
            year +
            '</a>',
        disclaimerMap:
            '<a href="https://www.MLSListings.com" rel="nofollow">Copyright MLSListings Inc © ' +
            year +
            '</a>',
        vdpp: [],
        vmapsearch: [],
        disclaimerSoldDpp:
            '<a href="https://www.MLSListings.com" rel="nofollow">Copyright MLSListings Inc © ' +
            year +
            '</a>'
    },
    101: {
        description: 'BAREIS MLS ®',
        disclaimer:
            'BAREIS Multiple Listing Service™ system<br/>The real estate listing data marked with this icon comes from the IDX program of the Bay Area Real Estate Information Services, Inc.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideHistory', 'hideSold', 'onlyFirstPicture']
    },
    102: {
        description: 'Multiple Listing Service, Inc.',
        disclaimer:
            'Sacramento Metrolist Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Sacramento Metrolist Multiple Listing Service™ system. Information deemed reliable, but not verified or guaranteed. Users are responsible for checking the accuracy, completeness, currency, and status of all information. All measurements and all calculations of area (i.e., Sq Ft and Acreage) are approximate. Broker has represented to MetroList that Broker has a valid listing signed by seller authorizing placement in the MLS. Above information is provided by Seller and/or other sources and has not been verified by Broker. Some properties that appear for sale on this web site may subsequently have been sold and may no longer be available. Copyright ' +
            year +
            ' MetroList Services, Inc. <a href="javascript: void(0); " data-dialog data-target="#102termofuse"> Metrolist Terms of Use</a>',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo', 'showBroker', 'hideSold', 'onlyFirstPicture'],
        vmapsearch: ['showBroker', 'showMLSLogo']
    },
    104: {
        description: 'Fresno MLS',
        disclaimer:
            'Fresno Multiple Listing Service™ system<br/>The real estate listing data marked with this icon comes from the IDX program of the Fresno Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    110: {
        description: 'San Francisco Association of REALTORS®',
        disclaimer:
            'SFAR Multiple Listing Service™ system<br/>Listings on this page identified as belonging to another listing firm are based upon data obtained from the SFAR MLS, which data is copyrighted by the San Francisco Association of REALTORS(R), but it not warranted. IDX information is provided exclusively for consumers’ personal, non-commercial use and that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. ',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    202: {
        description: 'CRMLS/MRMLS™ MLS ',
        disclaimer:
            'CRMLS Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the CRMLS Multiple Listing Service™ system.<br/>Based on information from California Regional Multiple Listing Service, Inc. as of ' +
            currentDate +
            '. This information is for your personal, non-commercial use and may not be used for any purpose other than to identify prospective properties you may be interested in purchasing. Display of MLS data is usually deemed reliable but is NOT guaranteed accurate by the MLS. Buyers are responsible for verifying the accuracy of all information and should investigate the data themselves or retain appropriate professionals. Information from sources other than the Listing Agent may have been included in the MLS data. Unless otherwise specified in writing, Broker/Agent has not and will not verify any information obtained from other sources. The Broker/Agent providing the information contained herein may or may not have been the Listing and/or Selling Agent.',
        disclaimerDPP:
            'Based on information from California Regional Multiple Listing Service, Inc. as of ' +
            currentDate +
            ' was obtained and /or other sources. All data, including all measurements and calculations of area, is obtained from various sources and has not been, and will not be, verified by broker or MLS. All information should be independently reviewed and verified for accuracy. Properties may or may not be listed by the office/agent presenting the information.',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    203: {
        description: 'SoCalMLS® and CARETS®',
        disclaimer:
            "Southern California Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Southern California Multiple Listing Service™ system. The information being provided by CARETS (CLAW, CRISNet MLS, DAMLS, CRMLS, i-Tech MLS, and/or VCRDS) is for the visitor's personal, non-commercial use and may not be used for any purpose other than to identify prospective properties visitor may be interested in purchasing. Any information relating to a property referenced on this web site comes from the Internet Data Exchange (IDX) program of CARETS. This web site may reference real estate listing(s) held by a brokerage firm other than the broker and/or agent who owns this web site. The accuracy of all information, regardless of source, including but not limited to square footages and lot sizes, is deemed reliable but not guaranteed and should be personally verified through personal inspection by and/or with the appropriate professionals. The data contained herein is copyrighted by CARETS, CLAW, CRISNet MLS, DAMLS, CRMLS, i-Tech MLS and/or VCRDS and is protected by all applicable copyright laws. Any dissemination of this information is in violation of copyright laws and is strictly prohibited. CARETS, California Real Estate Technology Services, is a consolidated MLS property listing data feed comprised of CLAW (Combined LA/Westside MLS), CRISNet MLS (Southland Regional AOR), DAMLS (Desert Area MLS),CRMLS (California Regional MLS), i-Tech MLS (Glendale AOR/Pasadena Foothills AOR) and VCRDS (Ventura County Regional Data Share).",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showFirmUnderPhoto', 'showMLSLogo', 'hideSold'],
        vmapsearch: []
    },
    204: {
        description: 'CLAW MLS',
        disclaimer:
            "Greater Los Angeles Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Greater Los Angeles Multiple Listing Service™ system. The information being provided by CARETS (CLAW, CRISNet MLS, DAMLS, CRMLS, i-Tech MLS, and/or VCRDS) is for the visitor's personal, non-commercial use and may not be used for any purpose other than to identify prospective properties visitor may be interested in purchasing. Any information relating to a property referenced on this web site comes from the Internet Data Exchange (IDX) program of CARETS. This web site may reference real estate listing(s) held by a brokerage firm other than the broker and/or agent who owns this web site. The accuracy of all information, regardless of source, including but not limited to square footages and lot sizes, is deemed reliable but not guaranteed and should be personally verified through personal inspection by and/or with the appropriate professionals. The data contained herein is copyrighted by CARETS, CLAW, CRISNet MLS, DAMLS, CRMLS, i-Tech MLS and/or VCRDS and is protected by all applicable copyright laws. Any dissemination of this information is in violation of copyright laws and is strictly prohibited. CARETS, California Real Estate Technology Services, is a consolidated MLS property listing data feed comprised of CLAW (Combined LA/Westside MLS), CRISNet MLS (Southland Regional AOR), DAMLS (Desert Area MLS),CRMLS (California Regional MLS), i-Tech MLS (Glendale AOR/Pasadena Foothills AOR) and VCRDS (Ventura County Regional Data Share).",
        disclaimerDPP:
            'Any information relating to a property referenced on this web site comes from the Internet Data Exchange (IDX) program of CARETS. This web site may reference real estate listing(s) held by a brokerage firm other than the broker and/or agent who owns this web site. The data contained herein is copyrighted by CARETS, CLAW, CRISNet MLS, DAMLS, CRMLS, i-Tech MLS and/or VCRDS and is protected by all applicable copyright laws. Any dissemination of this information is in violation of copyright laws and is strictly prohibited. CARETS, California Real Estate Technology Services, is a consolidated MLS property listing data feed comprised of CLAW (Combined LA/Westside MLS), CRISNet MLS (Southland Regional AOR), DAMLS (Desert Area MLS),CRMLS (California Regional MLS), i-Tech MLS (Glendale AOR/Pasadena Foothills AOR) and VCRDS (Ventura County Regional Data Share).',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    205: {
        description: 'i-Tech MLS',
        disclaimer:
            "i-TECH Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the i-TECH Multiple Listing Service™ system.The information being provided by CARETS (CLAW, CRISNet MLS, DAMLS, CRMLS, i-Tech MLS, and/or VCRDS) is for the visitor's personal, non-commercial use and may not be used for any purpose other than to identify prospective properties visitor may be interested in purchasing.Any information relating to a property referenced on this web site comes from the Internet Data Exchange (IDX) program of CARETS. This web site may reference real estate listing(s) held by a brokerage firm other than the broker and/or agent who owns this web site. The accuracy of all information, regardless of source, including but not limited to square footages and lot sizes, is deemed reliable but not guaranteed and should be personally verified through personal inspection by and/or with the appropriate professionals. The data contained herein is copyrighted by CARETS, CLAW, CRISNet MLS, DAMLS, CRMLS, i-Tech MLS and/or VCRDS and is protected by all applicable copyright laws. Any dissemination of this information is in violation of copyright laws and is strictly prohibited. CARETS, California Real Estate Technology Services, is a consolidated MLS property listing data feed comprised of CLAW (Combined LA/Westside MLS), CRISNet MLS (Southland Regional AOR), DAMLS (Desert Area MLS),CRMLS (California Regional MLS), i-Tech MLS (Glendale AOR/Pasadena Foothills AOR) and VCRDS (Ventura County Regional Data Share).",
        disclaimerDPP:
            'Any information relating to a property referenced on this web site comes from the Internet Data Exchange (IDX) program of CARETS. This web site may reference real estate listing(s) held by a brokerage firm other than the broker and/or agent who owns this web site. The data contained herein is copyrighted by CARETS, CLAW, CRISNet MLS, DAMLS, CRMLS, i-Tech MLS and/or VCRDS and is protected by all applicable copyright laws. Any dissemination of this information is in violation of copyright laws and is strictly prohibited. CARETS, California Real Estate Technology Services, is a consolidated MLS property listing data feed comprised of CLAW (Combined LA/Westside MLS), CRISNet MLS (Southland Regional AOR), DAMLS (Desert Area MLS),CRMLS (California Regional MLS), i-Tech MLS (Glendale AOR/Pasadena Foothills AOR) and VCRDS (Ventura County Regional Data Share).',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    206: {
        description: 'California Desert Association of REALTORS®',
        disclaimer:
            'Desert Area Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Desert Area Multiple Listing Service™ system. Display of MLS data is usually deemed reliable but is not NOT guaranteed accurate by the MLS. Buyers are responsible for verifying the accuracy of all information and should investigate the data themselves or retain appropriate professionals. Information from sources other than the Listing Agent may have been included in the MLS data. Unless otherwise specified in writing, Broker/Agent has not and will not verify any information obtained from other sources. The Broker/Agent providing the information contained herein may or may not have been the Listing and/or Selling Agent.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    207: {
        description: 'Ventura MLS System',
        disclaimer:
            "Ventura Multiple Listing Service™ system<br/>Listings provided is for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    210: {
        description: 'San Diego MLS, Inc.',
        disclaimer:
            'San Diego MLS ™ system<br/>The real estate listing data marked with this icon comes from the IDX program of the San Diego MLS.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    211: {
        description: 'High Desert Association of Realtors',
        disclaimer:
            "High Desert Association of Realtors™ system<br />Listings provided is for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing."
    },
    214: {
        description: 'Tulare County Association of REALTORS',
        disclaimer:
            'Based on information from the Tulare County Association of REALTORS® (alternatively, from the Tulare County MLS) as of ' +
            updateDate +
            '. All data, including all measurements and calculations of area, is obtained from various sources and has not been, and will not be, verified by broker or MLS. All information should be independently reviewed and verified for accuracy. Properties may or may not be listed by the office/agent presenting the information.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    300: {
        description: 'H3MLS MLS',
        disclaimer:
            'Massachusetts Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Massachusetts Multiple Listing Service™ system.<br/>The property listing data and information set forth herein were provided to MLS Property Information Network, Inc. from third party sources, including sellers, lessors, and public records, and were compiled by MLS Property Information Network, Inc. The property listing data and information are for the personal, non commercial use of consumers having a good faith in interest in purchasing or leasing listed properties of the type displayed to them and may not be used for any purpose other than to identify prospective properties which such consumers may have a good faith interest in purchasing or leasing. MLS Property Information Network, Inc. and its subscribers disclaim any and all representations and warranties as to the accuracy of the property listing data and information set forth herein.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    301: {
        description: 'Cape Cod & Islands Association of Realtors (CCIMLS)',
        disclaimer:
            'Cape Cod & Islands Association of Realtors™ system <br/>The real estate listing data marked with this icon  comes from the IDX program of the Cape Cod & Islands Association of Realtors™ system.'
    },
    302: {
        description: 'Berkshire Realtors MLS',
        disclaimer: `Copyright ${year} of Berkshire Realtors MLS. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the Berkshire Realtors MLS.`
    },
    310: {
        description: 'BRIGHT MLS',
        disclaimer:
            '© ' +
            year +
            ' BRIGHT, All Rights Reserved<br/>Information Deemed Reliable But Not Guaranteed <br/>The data relating to real estate for sale on this website appears in part through the BRIGHT Internet Data Exchange program, a voluntary cooperative exchange of property listing data between licensed real estate brokerage firms in which Movoto participates, and is provided by BRIGHT through a licensing agreement.The information provided by this website is for the personal, non-commercial use of consumers and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Data last updated: ' +
            updateDate +
            '. Some properties which appear for sale on this website may no longer be available because they are under contract, have Closedor are no longer being offered for sale. Some real estate firms do not participate in IDX and their listings do not appear on this website. Some properties listed with participating firms do not appear on this website at the request of the seller. This home sale information is not to be construed as an appraisal and may not be used as such for any purpose. BRIGHTMLS is the (or a) provider of this home sale information and has compiled content from various sources. Some properties represented may not have actually solddue to reporting errors.',
        disclaimerDPP:
            '© ' +
            year +
            ' BRIGHT, All Rights Reserved<br/>Information Deemed Reliable But Not Guaranteed <br/>The data relating to real estate for sale on this website appears in part through the BRIGHT Internet Data Exchange program, a voluntary cooperative exchange of property listing data between licensed real estate brokerage firms in which Movoto participates, and is provided by BRIGHT through a licensing agreement.The information provided by this website is for the personal, non-commercial use of consumers and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Data last updated: ' +
            updateDate +
            '. Some properties which appear for sale on this website may no longer be available because they are under contract, have Closedor are no longer being offered for sale. Some real estate firms do not participate in IDX and their listings do not appear on this website. Some properties listed with participating firms do not appear on this website at the request of the seller. This home sale information is not to be construed as an appraisal and may not be used as such for any purpose. BRIGHTMLS is the (or a) provider of this home sale information and has compiled content from various sources. Some properties represented may not have actually solddue to reporting errors.',
        disclaimerMap:
            '© ' +
            year +
            ' BRIGHT, All Rights Reserved<br/>Information Deemed Reliable But Not Guaranteed <br/>The data relating to real estate for sale on this website appears in part through the BRIGHT Internet Data Exchange program, a voluntary cooperative exchange of property listing data between licensed real estate brokerage firms in which Movoto participates, and is provided by BRIGHT through a licensing agreement.The information provided by this website is for the personal, non-commercial use of consumers and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Data last updated: ' +
            updateDate +
            '. Some properties which appear for sale on this website may no longer be available because they are under contract, have Closedor are no longer being offered for sale. Some real estate firms do not participate in IDX and their listings do not appear on this website. Some properties listed with participating firms do not appear on this website at the request of the seller. This home sale information is not to be construed as an appraisal and may not be used as such for any purpose. BRIGHTMLS is the (or a) provider of this home sale information and has compiled content from various sources. Some properties represented may not have actually solddue to reporting errors.',
        dppBroker: 'Movoto Broker: Joanna Zhao<br/>Phone Number:  301-329-8480',
        dppBrokerInfo: {
            dppBrokerName: 'Joanna Zhao',
            dppBrokerPhone: '3017989060'
        },
        mobilePhone: '301-798-9060',
        desktopPhone: '301-798-9060',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    311: {
        description: 'Real Estate Information Network',
        disclaimer:
            "REIN Multiple Listing Service™ system<br/>The listings data displayed on this medium comes in part from the Real Estate Information Network, Inc (REIN) and has been authorized by participating listing Broker Members of REIN for display. REIN's listings are based upon data submitted by its Broker Members, and REIN therefore makes no representation or warranty regarding the accuracy of the data. All users of REIN's listings database should confirm the accuracy of the listing information directly with the listing agent. © " +
            year +
            " REIN. REIN's listings data and information is protected under federal copyright laws. Federal law prohibits, among other acts, the unauthorized copying or alteration of, or preparation of derivative works from, all or any part of copyrighted materials, including certain compilations of data and information. COPYRIGHT VIOLATORS MAY BE SUBJECT TO SEVERE FINES AND PENALTIES UNDER FEDERAL LAW. Where possible, Movoto uses the Active listing data from REIN to calculate the Total Active Inventory, Median List Price, % Distressed, Median Days on Market, Median Home size by livable square feet, Median Price per Sqft (which is calculated by dividing Median Home Size by Median Sqft of Active listings), and Price per Sqft (which is calculated by dividing the specific Sqft of the home by the current price of the home).We try to display data that is as accurate as possible, but we cannot guarantee the accuracy of our statistics. The data on this page is for informational purposes only. REIN updates its listings on a daily basis. Data last updated " +
            updateDate +
            '',
        disclaimerDPP:
            '' +
            year +
            ' REIN. REIN\'s listings Data and information is protected under federal copyright laws. Federal law prohibits, among other acts, the unauthorized copying or alteration of, or preparation of derivative works from, all or any part of copyrighted materials, including certain compilations of data and information. COPYRIGHT VIOLATORS MAY BE SUBJECT TO SEVERE FINES AND PENALTIES UNDER FEDERAL LAW. Where possible, Movoto uses the Active listing data from REIN to calculate the Total Active Inventory, Median List Price, % Distressed, Median Days on Market, Median Home Size by livable square feet, Median Price per Sqft (which is calculated by dividing Median Home Size by Median Sqft of Active listings), and Price per Sqft (which is calculated by dividing the specific Sqft of the home by the current price of the home).We try to display data that is as accurate as possible, but we cannot guarantee the accuracy of our statistics. The data on this page is for informational purposes only. Based on Information provided by Real Estate Information Network <img class="img-mlslogo " src="' +
            cdnUrl +
            "images/desktop/logo/logo_311.png\">: This application does not include information on all of the properties available for sale at this time.<br/>The listings data displayed on this medium comes in part from the Real Estate Information Network, Inc. (REIN) and has been authorized by participating listing Broker Members of REIN for display. REIN's listings are based upon Data submitted by its Broker Members, and REIN therefore makes no representation or warranty regarding the accuracy of the Data. All users of REIN's listings database should confirm the accuracy of the listing information directly with the listing agent. <br/>Some listings  may be  duplicated in  the search  results due  to the  co-mingling of listings from more than one multiple listing service. Should there be different listing information between the duplicated listings; user is advised to verify the accuracy of the listing information before making any financial decisions. <br/>",
        disclaimerMap:
            'Based on Information provided by Real Estate Information Network <img class="img-mlslogo " src="' +
            cdnUrl +
            'images/desktop/logo/logo_311.png">: This application does not include information on all of the properties available for sale at this time.<br/>Some listings  may be  duplicated in  the search  results due  to the  co-mingling of listings from more than one multiple listing service. Should there be different listing information between the duplicated listings; user is advised to verify the accuracy of the listing information before making any financial decisions.',
        disclaimerSoldDpp:
            'Based on Information provided by Real Estate Information Network <img class="img-mlslogo " src="' +
            cdnUrl +
            "images/desktop/logo/logo_311.png\">: This application does not include information on all of the properties available for sale at this time.<br/>The listings data displayed on this medium comes in part from the Real Estate Information Network, Inc. (REIN) and has been authorized by participating listing Broker Members of REIN for display. REIN's listings are based upon Data submitted by its Broker Members, and REIN therefore makes no representation or warranty regarding the accuracy of the Data. All users of REIN's listings database should confirm the accuracy of the listing information directly with the listing agent. <br/>Some listings  may be  duplicated in  the search  results due  to the  co-mingling of listings from more than one multiple listing service. Should there be different listing information between the duplicated listings; user is advised to verify the accuracy of the listing information before making any financial decisions.<br/>",
        vdpp: ['hideDaysOnMovoto', 'hideDaysOnMovoto'],
        vmapsearch: ['notDOM']
    },
    312: {
        description: 'Virginia MLS Cooperative',
        disclaimer:
            'All or a portion of the multiple Listing information with the following logo is provided by the Virginia MLS Cooperative, LLC, from a copyrighted compilation of Listings. All Virginia MLS Cooperative information provided is deemed reliable but is not guaranteed accurate. The compilation of Listings and each individual Listing are  © ' +
            year +
            ' Virginia MLS Cooperative, LLC. All rights reserved.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    313: {
        description: 'Charlottesville Area Association of REALTORS®',
        disclaimer:
            "Charlottesville Area Association of REALTORS® system<br/>Participants (and their affiliated licensees, if applicable) shall indicate on their Web sites that IDX information is provided exclusively for consumers' personal, non‐commercial use; that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the MLS. The MLS may, at its discretion, require use of other disclaimers as necessary to protect participants and/or the MLS from liability.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    314: {
        description: 'Roanoke Valley Association of REALTORS',
        disclaimer:
            'All copyrights and intellectual property rights are the exclusive property of the Multiple Listing Service of The Roanoke Valley, and are being provided with a limited license to access and use the IDX Data subject to the IDX Business Rules. Whether using IDX Data directly, or through an IDX Subcontractor, the IDX Broker shall ensure IDX Data is used only in the manner and within the guidelines specified in these rules. The IDX Broker will hold harmless RVAR.',
        disclaimerDPP:
            'A. Multiple Listing Service of The Roanoke Valley is the single source for IDX Listings. B. IDX Participants must notify the MLS of their intention to display or deliver IDX information, and must giveto the MLS direct access for purposes of monitoring / ensuring compliance with applicable rules andpolicies. C. IDX Brokers may select the listings they choose to display through IDX displays based only on objectivecriteria including, but not limited to, factors such as geography or location, list price, type of property (e.g.,condominiums, multi-family etc.), cooperative compensation offered by listing brokers, type of listing (e.g.,exclusive right to sell or exclusive agency) or the level of service being provided by the listing firm. Selection of listings displayed through IDX must be independently made by each IDX Broker. D. Except as provided in these rules, an IDX electronic display, an IDX Broker, IDX Agent, or user operatingan IDX electronic display may not distribute, provide, or make any portion of the MLS database availableto any person or entity.',
        disclaimerMap:
            'Although the Multiple Listing Service of The Roanoke Valley is the single source for theselistings, listing data appearing on this web site does not necessarily reflect the entirety of allavailable listings within the Multiple Listing Service. All listing data is refreshed regularly, butits accuracy is subject to market changes. All copyrights and intellectual property rights are the exclusive property of the Multiple Listing Service of The Roanoke Valley. Whether obtained from a search result or otherwise, visitorsto this web site may only use this listing data for their personal, non-commercial benefit. Theunauthorized retrieval or use of this listing data is prohibited. All information is deemed reliable but not guaranteed, and should be independently verified.',
        vdpp: [],
        vmapsearch: []
    },
    321: {
        description: 'Greater Las Vegas Association of REALTORS® MLS',
        disclaimer:
            'GLVAR Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the GLVAR Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    322: {
        description: 'Northern Nevada Regional MLS',
        disclaimer:
            "Northern Nevada Regional MLS Multiple Listing Service™ system<br/>The data relating to real estate for sale on this web site comes in part from the Broker Reciprocity Program of the Northern Nevada Regional MLS. Real estate listings held by brokerage firms other than Movoto, Inc. are marked with the Broker Reciprocity logo and detailed information about them includes the name of the listing brokers. The information being provided is for consumers' personal, non-commercial use and may not be used for any other purpose other than to identify prospective properties comsumers may be interested in purchasing. Information deemed reliable but not guaranteed. © Copyright Northern Nevada Regional MLS. All rights reserved.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    401: {
        description: 'SABOR MLS',
        disclaimer:
            'San Antonio Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the San Antonio Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    402: {
        description: 'NTREIS',
        disclaimer:
            'North Texas Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the North Texas Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo', 'hideSold'],
        vmapsearch: []
    },
    403: {
        description: 'Houston Realtors Information Service, Inc.',
        disclaimer:
            'Houston Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Houston Multiple Listing Service™ system. All information provided is deemed reliable but is not guaranteed and should be independently verified. IDX information is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that the data is deemed reliable but is not guaranteed accurate by the MLS',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    404: {
        description: 'Austin Board of REALTORS',
        disclaimer:
            'ACTRIS Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the ACTRIS Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    405: {
        description: 'Central Texas Multiple Listing Service',
        disclaimer:
            'Central Texas Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Central Texas Multiple Listing Service™ system.',
        vdpp: ['hideSold']
    },
    409: {
        description: 'Greater McAllen Association of REALTORS',
        disclaimer:
            'Greater McAllen Association of REALTORS™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Greater McAllen Association of REALTORS™ system.',
        vdpp: ['hideSold']
    },
    410: {
        description: 'Corpus Christi Association of Realtors',
        disclaimer: `Copyright ${year} of Corpus Christi Association of Realtors. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the Corpus Christi Association of Realtors.`,
        vdpp: ['hideSold']
    },
    411: {
        description: 'Canopy MLS',
        disclaimer:
            'Based on information submitted to the MLS GRID as of ' +
            year +
            '. All data is obtained from various sources and may not have been verified by broker or MLS GRID. Supplied Open House Information is subject to change without notice. All information should be independently reviewed and verified for accuracy. Properties may or may not be listed by the office/agent presenting the information.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo'],
        vmapsearch: ['showMLSLogo']
    },
    412: {
        description: 'TRIAD MLS',
        disclaimer:
            "TRIAD Multiple Listing Service™ system<br/>The real estate listing data marked with this icon is provided courtesy of the TRIAD, Inc.'s, Internet Data Exchange Database. Information Deemed Reliable But Not Guaranteed.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showAgentUnderPhoto', 'showMLSLogo'],
        vmapsearch: []
    },
    413: {
        description: 'Triangle MLS, Inc. of North Carolina',
        disclaimer:
            "Triangle Multiple Listing Service™ system<br/>Listings marked with this icon are provided courtesy of theTriangle, Inc. of North Carolina, Internet Data Exchange Database. Brokers make an effort to deliver accurate information, but buyers should independently verify any information on which they will rely in a transaction. The listing broker shall not be responsible for any typographical errors, misinformation, or misprints, and they shall be held totally harmless from any damages arising from reliance upon this data. This data is provided exclusively for consumers' personal, non-commercial use. Copyright " +
            year +
            ' Triangle, Inc. of North Carolina. All rights reserved. Brokers make an effort to deliver accurate information, but buyers should independently verify any information on which they will rely in a transaction. The listing broker shall not be responsible for anytypographical errors, misinformation, or misprints, and they shall be held totally harmless from any damages arising from reliance upon this data. This data is provided exclusively for consumers’ personal, noncommercial use.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: ['showMLSLogo']
    },
    414: {
        description: 'NCMMLS',
        disclaimer:
            'NCMMLS Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the NCM Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    415: {
        description: 'Wilmington Regional Association of REAL TORS, Inc.',
        disclaimer:
            'Wilmington Regional Association of REALTORS® <br/>The real estate listing data marked with this icon comes from the IDX program of the MLS of the Wilmington Regional Association of REALTORS®, and is updated as of ' +
            updateDate +
            '. All information is deemed reliable but not guaranteed and should be independently verified. All properties are subject to prior sale, change, or withdrawal. Neither listing broker(s) nor Movoto shall be responsible for any typographical errors, misinformation, or misprints, and shall be held totally harmless from any damages arising from reliance upon these data. © ' +
            year +
            ' MLS of WRAR, Inc.',
        disclaimerMap:
            "Based on information from Multiple Listing Service of the Wilmington Regional Association of REALTORS, Inc., which neither guarantees nor is in any way responsible for its accuracy. All data is provided 'AS IS' and with all faults. Data maintained by Multiple Listing Service of the Wilmington Regional Association of REAL TORS, Inc. may not reflect all real estate activity in the market.",
        mapDisclaimer1:
            '© ' +
            year +
            ' Multiple Listing Service of the Wilmington Regional Association of REAL TORS, Inc.',
        vdpp: ['showAgentUnderPhoto', 'showMLSLogo'],
        vmapsearch: ['showBroker']
    },
    416: {
        description: 'Longleaf Pine REALTORS, Inc.',
        disclaimer:
            'Longleaf Pine REALTORS, Inc.™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Central Texas Multiple Listing ServiceTM system.'
    },
    417: {
        description: 'High Country Realtors',
        disclaimer: `Copyright ${year} of High Country Realtors. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the High Country Realtors.`,
        vdpp: ['hideSold']
    },
    418: {
        description: 'Mid Carolina MLS',
        disclaimer: `Copyright ${year} of Mid Carolina MLS. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the Mid Carolina MLS.`
    },
    419: {
        description: 'Burlington Almanace MLS',
        disclaimer: `Copyright ${year} of  Burlington Almanace MLS. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the Burlington Almanace MLS.`
    },
    421: {
        description: 'Georgia MLS',
        disclaimer:
            "Georgia Multiple Listing Service™ system<br/>The data relating to real estate for sale on this web site comes in part from the Internet Data Exchange/ Broker Reciprocity Program of Georgia MLS. Real estate listings held by brokerage firms other than this one are marked with the Internet Data Exchange/Broker Reciprocity logo and detailed information about them includes the name of the listing brokers. The broker providing this data believes it to be correct, but advises interested parties to confirm them before relying on them in a purchase decision. IDX information is provided exclusively for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Copyright " +
            year +
            ' Georgia MLS. All rights reserved.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    422: {
        description: 'FMLS',
        disclaimer:
            'First Multiple Listing Service, Inc. (FMLS) <br/>Listings identified with the FMLS IDX logo come from FMLS and are held by brokerage firms other than the owner of this website. The listing brokerage is identified in any listing details. Information is deemed reliable but is not guaranteed. If you believe any FMLS listing contains material that infringes your copyrighted work please <a href="https://www.fmls.com/dmca" rel="nofollow">click here</a> to review our DMCA policy and learn how to submit a takedown request. © ' +
            year +
            ' First Multiple Listing Service, Inc.',
        disclaimerDPP:
            '<img class="img-mlslogo " src="' +
            cdnUrl +
            'images/desktop/logo/logo_422.png">Listings identified with the FMLS IDX logo come from FMLS and are held by brokerage firms other than the owner of this website. The listing brokerage is identified in any listing details. Information is deemed reliable but is not guaranteed. If you believe any FMLS listing contains material that infringes your copyrighted work please <a href="https://www.fmls.com/dmca" rel="nofollow">click here</a> to review our DMCA policy and learn how to submit a takedown request. © ' +
            year +
            ' First Multiple Listing Service, Inc.',
        disclaimerMap:
            '<img class="img-mlslogo " src="' +
            cdnUrl +
            'images/desktop/logo/logo_422.png">Listings identified with the FMLS IDX logo come from FMLS and are held by brokerage firms other than the owner of this website. The listing brokerage is identified in any listing details. Information is deemed reliable but is not guaranteed. If you believe any FMLS listing contains material that infringes your copyrighted work please <a href="https://www.fmls.com/dmca" rel="nofollow">click here</a> to review our DMCA policy and learn how to submit a takedown request. © ' +
            year +
            ' First Multiple Listing Service, Inc.',
        asyncDisclaimer:
            '<p class="text-mls-disclaimer" style="font-size:15px;"><img class="img-mlslogo " alt="mls logo" src="' +
            cdnUrl +
            'images/desktop/logo/logo_422.png"> Listings identified with the FMLS IDX logo come from FMLS and are held by brokerage firms other than the owner of this website. The listing brokerage is identified in any listing details. Information is deemed reliable but is not guaranteed. If you believe any FMLS listing contains material that infringes your copyrighted work please <a href="https://www.fmls.com/dmca" rel="nofollow">click here</a> to review our DMCA policy and learn how to submit a takedown request. © ' +
            year +
            ' First Multiple Listing Service, Inc.</p>',
        vdpp: ['showMLSLogo', 'hideSold'],
        vmapsearch: ['showMLSLogo'],
        home: ['asyncDisclaimer']
    },
    426: {
        description: 'Pensacola Association of REALTORS ®',
        disclaimer:
            'Copyright ' +
            year +
            ' by the Multiple Listing Service of the Pensacola Association of REALTORS® This information is believed to be accurate but is not guaranteed. Subject to verification by all parties. This data is copyrighted and may not be transmitted, retransmitted, copied, framed, repurposed, or altered in any way for any other site, individual and/or purpose without the express written permission of the Multiple Listing Service of the Pensacola Association of REALTORS®. Florida recognizes single and transaction agency relationships. Information Deemed Reliable But Not Guaranteed. Any use of search facilities of data on this site, other than by a consumer looking to purchase real estate, is prohibited.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    429: {
        description: 'Central Panhandle MLS',
        disclaimer: 'Copyright ' + year + ' Bay Central Panhandle Association of REALTORS®'
    },
    430: {
        description: 'Emerald Coast MLS',
        disclaimer:
            "Emerald Coast Multiple Listing Service™ system<br/>Information is provided exclusively for consumers' personal, non-commercial use; the information is to not be used in any other manner aside from identifying prospective properties for consumers.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    431: {
        description: 'Mid-Florida Regional MLS',
        disclaimer:
            'My Florida Regional Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the My Florida Regional Multiple Listing Service™ system. The real estate listing data marked with this icon  comes from the IDX program of the My Florida Regional Multiple Listing Service™ system. All information provided is deemed reliable but is not guaranteed and should be independently verified. Listings displayed on this website may be subject to prior sale or removal from sale; availability of any listing should always be independently verified. Listing information is provided exclusively for consumers’ personal, non-commercial use, solely to identify potential properties for potential purchase; all other use is strictly prohibited and may violate relevant federal and state law.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['onlyFirstPicture'],
        vmapsearch: ['showBroker'],
        dppBroker: '<b>Movoto Broker</b>: Lewis Roberts<br/><b>Phone Number</b>: 3214246952',
        dppBrokerInfo: {
            dppBrokerName: 'Lewis Roberts',
            dppBrokerPhone: '3214246952'
        },
        mobilePhone: '3214246952',
        desktopPhone: '3214246952'
    },
    432: {
        description: 'SouthEast-Florida Regional MLS',
        disclaimer:
            "Southeast Florida/Miami Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Southeast Florida/Miami Multiple Listing Service™ system. The data relating to real estate for sale/lease on this web site comes from a cooperative data exchange program of the Multiple Listing Service (MLS) in which these Brokers participate (Realtor® Association of Miami-Dade County, Realtor® Association of Greater Ft. Lauderdale, Realtor® Association of Greater Miami and the Beaches, Northwestern Dade Association of Realtors®, South Broward Board of Realtors®). The properties displayed may not be all of the properties in the MLS database, or all of the properties listed with Brokers participating in the cooperative data exchange program. Properties listed by Brokers other than this Broker are marked with the IDX Symbol, indicating an agreement to exchange property information. Detailed information about such properties includes the name of the listing Broker's Company. Information provided is thought to be reliable but is not guaranteed to be accurate. You are advised to verify facts that are important to you. No warranties, expressed or implied, are provided for the data herein, or for their use or interpretation by the user. This information is protected from unlawful duplication by copyright. Federal law prohibits discrimination on the basis of race, color, religion, sex, handicap, familial status or national origin in the sale, rental or financing of housing.",
        disclaimerDPP:
            "The Realtor® Associations (Miami-Dade County, Greater Ft. Lauderdale, Greater Miami and the Beaches, Northwestern Dade, South Broward Board) are not responsible for the accuracy of the information listed above. Real Estate listings held in brokerage firms other than the office owning this web site are marked with the IDX Logo on the short inquiry and detailed information about the listing includes the name of the listing Broker's Company. ",
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    433: {
        description: 'NorthEast Florida Multiple Listing Service, Inc',
        disclaimer:
            'NorthEast Florida Multiple Listing Service, Inc.<br/>The real estate listing data marked with this icon  comes from the IDX program of the NorthEast Florida Multiple Listing Service, Inc.',
        disclaimerDPP: '',
        disclaimerMap: '',
        disclaimerMobileDPP:
            'NorthEast Florida Multiple Listing Service, Inc.<br/>The real estate listing data marked with this icon  comes from the IDX program of the NorthEast Florida Multiple Listing Service, Inc.',
        disclaimerMobileSoldDPP:
            '© ' +
            year +
            ' NorthEast Florida Multiple Listing Service, Inc. <br/> All rights reserved. Closed (sold) listings may have been listed and/or sold by a real estate firm other than the firm(s) featured on this website. Closed data is not available until the sale of the property is recorded in the MLS. Home sale data is not an appraisal, CMA, competitive or comparative market analysis, or home valuation of any property. ',
        vdpp: ['showMLSLogo', 'showBroker', 'hideSold'],
        vmapsearch: ['showMLSLogo', 'showBroker']
    },
    434: {
        description: 'Space Coast Association of Realtors',
        disclaimer:
            'Space Coast Association of Realtors<br/>The real estate listing data marked with this icon  comes from the IDX program of the Space Coast Association of Realtors™ system.',
        dppBrokerInfo: {
            dppBrokerName: 'Lewis Roberts',
            dppBrokerLicense: 'BK3444695',
            dppBrokerOffice: 'Movoto, Inc.'
        }
    },
    435: {
        description: 'BeachesMLS Inc',
        disclaimer:
            'The Beaches Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the The Beaches Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hidePhoneIcon'],
        vmapsearch: []
    },
    436: {
        description: 'Ft. Lauderdale MLS',
        disclaimer:
            'Ft Lauderdale Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Ft Lauderdale Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hidePhoneIcon'],
        vmapsearch: []
    },
    437: {
        disclaimer:
            'Florida Keys Board of Realtors™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Florida Keys Board of Realtors™ system.',
        description: 'Florida Keys MLS'
    },
    438: {
        description: 'The REALTOR Association of Greater Fort Myers and The Beach, Inc',
        disclaimer:
            'SWFMLS-Greater Fort Myers and the Beaches Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the SWFMLS-Greater Fort Myers and the Beaches Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    439: {
        description: 'Southwest Florida MLS',
        disclaimer:
            'Sunshine/Naples Multiple Listing Service™ system<br/>Some properties that appear for sale on this limited electronic display may no longer be available. For the most current information, contact Movoto, 888-766-8686 FREE, and CustomerCare@movoto.com.',
        disclaimerDPP: '',
        disclaimerMap:
            'Some properties that appear for sale on this limited electronic display may no longer be available. For the most current information, contact Movoto, 888-766-8686 FREE, and CustomerCare@movoto.com.',
        vdpp: [],
        vmapsearch: ['showMLSLogo']
    },
    440: {
        description: 'Indian River County MLS',
        disclaimer:
            'Indian River County MLS™ system <br/> The real estate listing data marked with this icon  comes from the IDX program of the Indian River County MLSTM system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [''],
        vmapsearch: ['']
    },
    441: {
        description: 'BRIGHT MLS',
        disclaimer:
            '© ' +
            year +
            ' BRIGHT, All Rights Reserved<br/>Information Deemed Reliable But Not Guaranteed <br/>The data relating to real estate for sale on this website appears in part through the BRIGHT Internet Data Exchange program, a voluntary cooperative exchange of property listing data between licensed real estate brokerage firms in which Movoto participates, and is provided by BRIGHT through a licensing agreement.The information provided by this website is for the personal, non-commercial use of consumers and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Data last updated: ' +
            updateDate +
            '. Some properties which appear for sale on this website may no longer be available because they are under contract, have Closedor are no longer being offered for sale. Some real estate firms do not participate in IDX and their listings do not appear on this website. Some properties listed with participating firms do not appear on this website at the request of the seller. This home sale information is not to be construed as an appraisal and may not be used as such for any purpose. BRIGHTMLS is the (or a) provider of this home sale information and has compiled content from various sources. Some properties represented may not have actually solddue to reporting errors.',
        disclaimerDPP:
            '© ' +
            year +
            ' BRIGHT, All Rights Reserved<br/>Information Deemed Reliable But Not Guaranteed <br/>The data relating to real estate for sale on this website appears in part through the BRIGHT Internet Data Exchange program, a voluntary cooperative exchange of property listing data between licensed real estate brokerage firms in which Movoto participates, and is provided by BRIGHT through a licensing agreement.The information provided by this website is for the personal, non-commercial use of consumers and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Data last updated: ' +
            updateDate +
            '. Some properties which appear for sale on this website may no longer be available because they are under contract, have Closedor are no longer being offered for sale. Some real estate firms do not participate in IDX and their listings do not appear on this website. Some properties listed with participating firms do not appear on this website at the request of the seller. This home sale information is not to be construed as an appraisal and may not be used as such for any purpose. BRIGHTMLS is the (or a) provider of this home sale information and has compiled content from various sources. Some properties represented may not have actually solddue to reporting errors.',
        disclaimerMap:
            '© ' +
            year +
            ' BRIGHT, All Rights Reserved<br/>Information Deemed Reliable But Not Guaranteed <br/>The data relating to real estate for sale on this website appears in part through the BRIGHT Internet Data Exchange program, a voluntary cooperative exchange of property listing data between licensed real estate brokerage firms in which Movoto participates, and is provided by BRIGHT through a licensing agreement.The information provided by this website is for the personal, non-commercial use of consumers and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Data last updated: ' +
            updateDate +
            '. Some properties which appear for sale on this website may no longer be available because they are under contract, have Closedor are no longer being offered for sale. Some real estate firms do not participate in IDX and their listings do not appear on this website. Some properties listed with participating firms do not appear on this website at the request of the seller. This home sale information is not to be construed as an appraisal and may not be used as such for any purpose. BRIGHTMLS is the (or a) provider of this home sale information and has compiled content from various sources. Some properties represented may not have actually solddue to reporting errors.',
        dppBroker: 'Movoto Broker: Joanna Zhao<br/>Phone Number:  301-329-8480',
        dppBrokerInfo: {
            dppBrokerName: 'Joanna Zhao',
            dppBrokerPhone: '3013298480'
        },
        mobilePhone: '301-329-8480',
        desktopPhone: '301-329-8480',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    442: {
        description: 'West Penn Multi-List, Inc',
        disclaimer:
            'West Penn Multiple Listing Service™ system<br/>Information deemed reliable, but not guaranteed.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo'],
        vmapsearch: ['showMLSLogo']
    },
    444: {
        description: 'GACAR MLS',
        disclaimer:
            'Copyright ' +
            year +
            ' of Gainsville Alchua County Association of Realtors. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the GACAR.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo'],
        vmapsearch: ['showMLSLogo']
    },
    448: {
        description: 'New Smyrna Beach MLS',
        disclaimer: `Copyright ${year} of  New Smyrna Beach MLS. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the New Smyrna Beach MLS.`
    },
    451: {
        description: 'Garden State Multiple Listing Service, L.L.C.',
        disclaimer:
            'Gardent State Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Gardent State Multiple Listing Service™ system. The data relating to real estate for sale on this website comes in part from the IDX Program of Garden State Multiple Listing Service, L.L.C. Real estate listings held by other brokerage firms are marked as IDX Listing. Data is deemed reliable but not guaranteed. Notice: The dissemination of listings on this website does not constitute the consent required by N.J.A.C. 11:5.6.1 (n) for the advertisement of listings exclusively for sale by another broker. Any such consent must be obtained in writing from the listing broker. This information is being provided for Consumers’ personal, non-commercial use and may not be used for any purpose other than to identify prospective properties Consumers may be interested in purchasing. ',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo'],
        vmapsearch: []
    },
    452: {
        description: 'Monmouth Ocean MLS',
        disclaimer:
            'Monmouth/Ocean Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Monmouth/Ocean Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    453: {
        description: 'South Jersey Shore MLS',
        disclaimer:
            'South Jersey Shore Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the South Jersey Shore Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: ['showMLSLogo']
    },
    454: {
        description: 'New Jersey MLS',
        disclaimer:
            'The data relating to the real estate for sale on this web site comes in part from the Internet Data Exchange Program of the NJMLS. Real estate listings held by brokerage firms other than Movoto are marked with the Internet Data Exchange logo and information about them includes the name of the listing brokers. Some properties listed with the participating brokers do not appear on this website at the request of the seller. Listings of brokers that do not participate in Internet Data Exchange do not appear on this website. <br/>All information deemed reliable but not guaranteed. Last date updated: ' +
            updateDate +
            '.<br/>Source: New Jersey Multiple Listing Service, Inc.<br/>© ' +
            year +
            ' New Jersey Multiple Listing Service, Inc. All rights reserved.',
        disclaimerDPP:
            'The data relating to the real estate for sale on this web site comes in part from the Internet Data Exchange Program of the NJMLS. Real estate listings held by brokerage firms other than Movoto are marked with the Internet Data Exchange logo and information about them includes the name of the listing brokers. Some properties listed with the participating brokers do not appear on this website at the request of the seller. Listings of brokers that do not participate in Internet Data Exchange do not appear on this website. <br/>All information deemed reliable but not guaranteed. Last date updated: ' +
            currentDate +
            '.<br/>Source: New Jersey Multiple Listing Service, Inc.<br/>© ' +
            year +
            ' New Jersey Multiple Listing Service, Inc. All rights reserved.',
        disclaimerMap:
            'The data relating to the real estate for sale on this web site comes in part from the Internet Data Exchange Program of the NJMLS. Real estate listings held by brokerage firms other than Movoto are marked with the Internet Data Exchange logo and information about them includes the name of the listing brokers. Some properties listed with the participating brokers do not appear on this website at the request of the seller. Listings of brokers that do not participate in Internet Data Exchange do not appear on this website. <br/>All information deemed reliable but not guaranteed. Last date updated: ' +
            currentDate +
            '.<br/>Source: New Jersey Multiple Listing Service, Inc.<br/>© ' +
            year +
            ' New Jersey Multiple Listing Service, Inc. All rights reserved.',
        disclaimerMobileMap:
            'The data relating to the real estate for sale on this web site comes in part from the Internet Data Exchange Program of the NJMLS. Real estate listings held by brokerage firms other than Movoto are marked with the Internet Data Exchange logo and information about them includes the name of the listing brokers. Some properties listed with the participating brokers do not appear on this website at the request of the seller. Listings of brokers that do not participate in Internet Data Exchange do not appear on this website. <br/><br/>All information deemed reliable but not guaranteed. <br/>Last date updated: ' +
            currentDate +
            '.<br/>Source: New Jersey Multiple Listing Service, Inc.<br/><br/>© ' +
            year +
            ' New Jersey Multiple Listing Service, Inc. All rights reserved.',
        disclaimerMobileDPP:
            'The data relating to the real estate for sale on this web site comes in part from the Internet Data Exchange Program of the NJMLS. Real estate listings held by brokerage firms other than Movoto are marked with the Internet Data Exchange logo and information about them includes the name of the listing brokers. Some properties listed with the participating brokers do not appear on this website at the request of the seller. Listings of brokers that do not participate in Internet Data Exchange do not appear on this website. <br/><br/>All information deemed reliable but not guaranteed. <br/>Last date updated: ' +
            currentDate +
            '.<br/>Source: New Jersey Multiple Listing Service, Inc.<br/><br/>© ' +
            year +
            ' New Jersey Multiple Listing Service, Inc. All rights reserved.',
        vdpp: ['showMLSLogo', 'showBroker', 'disclaimerSameAsAcitveDpp', 'cannotCutImage', 'onlyFirstPicture'],
        vmapsearch: ['showMLSLogo', 'showBroker', 'showDisclaimerOnMobileMap', 'cannotCutImage']
    },
    455: {
        description: 'Cape May County MLS',
        disclaimer:
            'Cape May County Multiple Listing Service<br/>The real estate listing data marked with this icon  comes from the IDX program of the Cape May County Multiple Listing Service system. The information provided by this website is for the personal, non-commercial use of consumers and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Information deemed reliable but is not guaranteed. Some properties which appear for sale on this website may no longer be available because they are under contract or are no longer being offered for sale. © ' +
            year +
            ' Cape May County MLS. All Rights Reserved.',
        disclaimerDPP: '',
        disclaimerMap: '',
        disclaimerMobileMap: '',
        disclaimerMobileDPP: '',
        vdpp: ['showMLSLogo', 'showBroker', 'showMLSNum', 'showFirmUnderPhoto'],
        vmapsearch: ['showBroker', 'showMLSLogo']
    },
    461: {
        description: 'Illinois MLS',
        disclaimer:
            'MRED Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the MRED Multiple Listing Service™ system. NOTICE: Many homes contain recording devices, and buyers should be aware they may be recorded during a showing.',
        disclaimerDPP:
            'The accuracy of all information, regardless of source, including but not limited to square footages and lot sizes, is deemed reliable but not guaranteed and should be personally verified through personal inspection by and/or with the appropriate professionals. NOTICE: Many homes contain recording devices, and buyers should be aware they may be recorded during a showing.',
        disclaimerMap: '',
        vdpp: ['showMLSLogo', 'showSameSizeFontWithDppBasicAddress'],
        vmapsearch: ['showMLSLogo'],
        ListingsOfficeCss: 'font-size:18px;'
    },
    462: {
        description: 'Savannah Board of Realtors',
        disclaimer: `Copyright ${year} of Savannah Board of Realtors. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the  Savannah Board of Realtors.`,
        vdpp: ['hideSold']
    },
    463: {
        description: 'Greater Augusta AOR',
        disclaimer:
            'Copyright ' +
            year +
            ' of Greater Augusta Association of Realtors. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the GAAR.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo'],
        vmapsearch: ['showMLSLogo']
    },
    471: {
        description: 'Arizona Multiple Listing Service, Inc.',
        disclaimer:
            'Arizona Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Arizona Multiple Listing Service™ system. All information provided is deemed reliable but is not guaranteed and should be independently verified.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo'],
        vmapsearch: []
    },
    472: {
        description: 'MLS of Southern Arizona',
        disclaimer:
            'The data relating to real estate listings on this website comes in part from the Internet Data Exchange (IDX) program of Multiple Listing Service of Southern Arizona. IDX information is provided exclusively for consumers\' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Listings provided by brokerages other than Movoto, Inc. are identified with the MLSSAZ IDX Logo. All Information Is Deemed Reliable But Is Not Guaranteed Accurate. Listing information Copyright 20nn MLS of Southern Arizona. All Rights Reserved.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo', 'showBroker'],
        vmapsearch: ['showBroker']
    },
    474: {
        description: 'WARDEX',
        disclaimer: `Copyright ${year} of Western Arizona Data Exchange. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the WARDEX.`,
        vdpp: ['hideSold']
    },
    475: {
        description: 'WMLS',
        disclaimer: `Copyright ${year} of White Mountain MLS. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the WMLS.`,
        vdpp: ['hideSold']
    },
    476: {
        description: 'PAAR',
        disclaimer: `Copyright ${year} of Prescott Area AOR. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the PAAR.`,
        vdpp: ['hideSold']
    },
    481: {
        description: 'Hudson Gateway MLS',
        disclaimer:
            'Hudson Gateway Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Hudson Gateway Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    482: {
        description: 'Long Island MLS',
        disclaimer:
            'MLSLI Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the MLSLI Multiple Listing Service™ system. The data relating to real estate for sale on this web site comes in part from the Broker Reciprocity Program of the Multiple Listing Service of Long Island, Inc. Real Estate listings held by brokerage firms other than Movoto, Inc. are marked with the Broker Reciprocity logo and detailed information about them includes the name of the listing brokers. The source of the displayed data is either the property owner or public record provided by non-governmental third parties. It is believed to be reliable but not guaranteed. Information Copyright ' +
            year +
            ', Multiple Listing Service of Long Island, Inc.',
        disclaimerDPP:
            'Information Copyright ' +
            year +
            ", Multiple Listing Service of Long Island, Inc. All Rights Reserved. The source of the displayed data is either the property owner or public record provided by non-governmental third parties. It is believed to be reliable but not guaranteed. This information is provided exclusively for consumers’ personal, non-commercial use. The data relating to real estate for sale on this web site comes in part from the Broker Reciprocity Program of the Multiple Listing Service of Long Island, Inc.  Information deemed reliable but not guaranteed accurate. This information should be independently verified if any person intends to engage in a transaction in reliance upon it. The information provided is for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Some or all of the listings displayed may not belong to the firm whose web site is being visited. Listing information updated daily. This listing was retrieved on " +
            updateDate +
            '. ',
        disclaimerMap: '',
        vdpp: ['ShowUnNormalDisclaimerOnDpp'],
        vmapsearch: []
    },
    483: {
        description: 'Mid Hudson MLS',
        disclaimer:
            'Mid Hudson Multiple Listing Service™ system <br />The real estate listing data marked with this icon  comes from the IDX program of the Mid Hudson Multiple Listing Service™ system. The data relating to real estate for sale on this web site comes in part from the Broker Reciprocity Program of the MHMLS held by brokerage firms other than Movoto, Inc.  are marked with the MHMLS logo or an abbreviated logo and detailed information about them includes the name of the listing broker.',
        disclaimerMap:
            'The information appearing herein has not been verified by the Mid-Hudson Multiple Listing Service, Inc. or by any individual(s) who may be affiliated with said entity, all of whom hereby collectively and severally disclaim any and all responsibility for the accuracy of the information appearing at this web site, at any time or from time to time. All such information should be independently verified by the recipient of such data. This data is not warranted for any purpose. ',
        vdpp: ['showMLSLogo']
    },
    484: {
        description: 'The REBNY Listing Service (RLS)',
        disclaimer:
            'The real estate listing data marked with this icon comes from the IDX program of the REBNY Listing Service (RLS).<br/>This information is not verified for authenticity or accuracy and is not guaranteed and may not reflect all real estate activity in the market. ©' +
            year +
            ' REBNY Listing Service, Inc. All rights reserved.<br/>Furthermore, The IDX information is provided exclusively for consumers’ personal, non-commercial use and that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing.',
        disclaimerDPP: '',
        disclaimerMap: '',
        mapDisclaimer1:
            'Listings with this icon are © ' +
            year +
            ' of The REBNY Listing Service (RLS). All Rights Reserved. RLS MLS Data display by Movoto. ',
        mlsReliefInfoMap:
            'This information is not verified for authenticity or accuracy and is not guaranteed and may not reflect all real estate activity in the market.',
        vdpp: ['hideMarketStatistics', 'showMLSLogo', 'showBroker'],
        vmapsearch: ['showMLSLogo', 'showBroker'],
        asyncDisclaimer:
            'Listings with this icon are © ' +
            year +
            ' of The REBNY Listing Service (RLS). All Rights Reserved. RLS MLS Data display by Movoto. <span><a href="' +
            appUrl +
            'about/mls-logo/" target="_blank">Disclaimers</a></span><br />This information is not verified for authenticity or accuracy and is not guaranteed and may not reflect all real estate activity in the market.',
        home: ['asyncDisclaimer']
    },
    485: {
        description: 'Global MLS',
        disclaimer:
            '©' +
            year +
            ' Global Multiple Listing Service, Inc. The data relating to real estate on this website comes in part from the Internet Data Exchange program of the GMLS.  All information is deemed reliable but not guaranteed and should be independently verified. All properties subject to prior sale, change, or withdrawal.  Neither listing broker(s), GMLS shall be responsible for any typographical errors, misinformation, or misprints, and shall be held totally harmless from any damages arising from reliance upon these data.  IDX information is provided exclusively for consumers’ personal, non-commercial use and may not be used for any purpose other than to identify prospective properties they may be interested in purchasing.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    486: {
        description: 'CYNIS, GENRIS, and WNYREIS MLS',
        disclaimer:
            'Western New York Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Western New York Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    487: {
        description: 'Ulster County Board of Realtors',
        disclaimer:
            'Ulster County Board of Realtors™system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Ulster County Board of Realtors™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    491: {
        description: 'Oregon MLS',
        disclaimer:
            'The content relating to real estate for sale on this web site comes in part from the IDX program of the RMLS™ of Portland, Oregon. Real estate listings held by brokerage firms other than Movoto are marked with the RMLS™ <img class="img-mlslogo " src="' +
            cdnUrl +
            'images/desktop/logo/logo_491.png">, and detailed information about these properties includes the names of the listing brokers. Listing content is copyright © ' +
            year +
            ' RMLS™, Portland, Oregon. This content last updated on ' +
            updateDate +
            '. Some properties which appear for sale on this web site may subsequently have sold or may no longer be available. All information provided is deemed reliable but is not guaranteed and should be independently verified.',
        disclaimerDPP:
            'The content relating to real estate for sale on this web site comes in part from the IDX program of the RMLS™ of Portland, Oregon. Real estate listings held by brokerage firms other than Movoto are marked with the RMLS™ <img class="img-mlslogo " src="' +
            cdnUrl +
            'images/desktop/logo/logo_491.png">, and detailed information about these properties includes the names of the listing brokers. Listing content is copyright © ' +
            year +
            ' RMLS™, Portland, Oregon. This content last updated on ' +
            updateDate +
            '. Some properties which appear for sale on this web site may subsequently have sold or may no longer be available. All information provided is deemed reliable but is not guaranteed and should be independently verified.',
        disclaimerMap:
            'The content relating to real estate for sale on this web site comes in part from the IDX program of the RMLS™ of Portland, Oregon. Real estate listings held by brokerage firms other than Movoto are marked with the RMLS™ <img class="img-mlslogo " src="' +
            cdnUrl +
            'images/desktop/logo/logo_491.png">, and detailed information about these properties includes the names of the listing brokers. Listing content is copyright © ' +
            year +
            ' RMLS™, Portland, Oregon. This content last updated on ' +
            updateDate +
            '. Some properties which appear for sale on this web site may subsequently have sold or may no longer be available. All information provided is deemed reliable but is not guaranteed and should be independently verified.',
        asyncDisclaimer:
            'The content relating to real estate for sale on this web site comes in part from the IDX program of the RMLS™ of Portland, Oregon. Real estate listings held by brokerage firms other than Movoto are marked with the RMLS™ <img class="img-mlslogo " src="' +
            cdnUrl +
            'images/desktop/logo/logo_491.png">, and detailed information about these properties includes the names of the listing brokers. Listing content is copyright © ' +
            year +
            ' RMLS™, Portland, Oregon. This content last updated on ' +
            updateDate +
            '. Some properties which appear for sale on this web site may subsequently have sold or may no longer be available. All information provided is deemed reliable but is not guaranteed and should be independently verified.',
        disclaimerSoldDpp:
            'The content relating to real estate for sale on this web site comes in part from the IDX program of the RMLS™ of Portland, Oregon. Real estate listings held by brokerage firms other than Movoto are marked with the RMLS™ <img class="img-mlslogo " src="' +
            cdnUrl +
            'images/desktop/logo/logo_491.png">, and detailed information about these properties includes the names of the listing brokers. Listing content is copyright © ' +
            year +
            ' RMLS™, Portland, Oregon. This content last updated on ' +
            updateDate +
            '. Some properties which appear for sale on this web site may subsequently have sold or may no longer be available. All information provided is deemed reliable but is not guaranteed and should be independently verified.',
        vdpp: [
            'rangePrice',
            'ShowUnNormalDisclaimerOnDpp',
            'showMLSLogo',
            'onlyFirstPicture',
            'hidePhotoCountCompliance'
        ],
        vmapsearch: ['showMLSLogo'],
        home: ['asyncDisclaimer']
    },
    493: {
        description: 'Willamette Valley MLS',
        disclaimer: `Copyright ${year} of Willamette Valley MLS. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the WVMLS.`
    },
    501: {
        description: 'NWMLS',
        disclaimer:
            'Northwest Multiple Listing Service ™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Northwest Multiple Listing Service™ system. Disclaimer: The information contained in this listing has not been verified by Movoto, Inc. and should be verified by the buyer.<br/><a href="' +
            staticUrl +
            'static/disclaimers/501_dmca_notice.pdf">DMCA Notice</a> ',
        disclaimerDPP:
            'Disclaimer: The information contained in this listing has not been verified by ' +
            listingOfficeName +
            ' and should be verified by the buyer.',
        disclaimerMap: '',
        disclaimerSoldDpp:
            'Disclaimer: The information contained in this listing has not been verified by ' +
            listingOfficeName +
            ' and should be verified by the buyer.',
        vdpp: [
            'showFirmUnderPhoto',
            'showMLSLogo',
            'showBroker',
            'includeMlsDesToBroker',
            'showAgentUnderPhoto',
            'moveListingOfficeNearToPicture'
        ],
        vmapsearch: ['showMLSLogo', 'showBroker', 'includeMlsDesToBroker']
    },
    502: {
        description: 'Yakima Association of Realtors',
        disclaimer:
            'Yakima Association of Realtors<br/>The real estate listing data marked with this icon  comes from the IDX program of the Yakima Association of Realtors'
    },
    503: {
        description: 'Spokane Association of REALTORS',
        disclaimer: `Copyright ${year} of the Spokane Association of REALTORS® MLS. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the SARMLS.`,
        disclaimerDPP: `The multiple listing information is provided by <img class='img-mlslogo img-done' src='${cdnUrl}images/desktop/logo/logo_503.png'> SAR MLS. © ${year} of the Spokane Association of REALTORS® MLS. All rights reserved. Information deemed reliable but not guaranteed accurate. This information should be independently verified if any person intends to engage in a transaction in reliance upon it. The information provided is for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Some or all of the listings displayed may not belong to the firm whose web site is being visited. Listing information updated daily. This listing was retrieved on ${updateDate}. `,
        dpp: ['ShowUnNormalDisclaimerOnDpp']
    },
    511: {
        description: 'Wasatch Front Regional Multiple Listing Service, Inc.',
        disclaimer:
            'Wasatch Front Regional Multiple Listing Service™ system<br/>The multiple listing information is provided by Wasatch Front Regional Multiple Listing Service, Inc. from a copyrighted compilation of listings. The compilation of listings and each individual listing are © ' +
            year +
            " Wasatch Front Regional Multiple Listing Service, Inc., All Rights Reserved. The information provided is for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Information deemed reliable but not guaranteed accurate. Buyer to verify all information.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showBroker'],
        vmapsearch: []
    },
    521: {
        description: 'METROLIST, INC., DBA RECOLORADO® ',
        disclaimer:
            'Denver METROLIST, INC., DBA RECOLORADO® system<br/>The content relating to real estate for sale in this Web site comes in part from the Internet Data eXchange (IDX) program of METROLIST, INC., DBA RECOLORADO® Real estate listings held by brokers other than MOVOTO, INC are marked with the IDX Logo. This information is being provided for the consumers\' personal, non-commercial use and may not be used for any other purpose. All information subject to change and should be independently verified.<br/><a href="javascript: void(0); " data-dialog data-target="#521disclosures">Disclosures</a> ',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [
            'showMLSLogo',
            'hideDaysOnMovoto',
            'showMLSNum',
            'showBroker',
            'showlogo_mlsnum_office_in_dpp_seoinfo'
        ],
        vmapsearch: ['showBroker', 'notDOM', 'showMLSLogo', 'showMLSNum']
    },
    522: {
        description: 'Information and Real Estate Services, LLC MLS',
        disclaimer:
            'Information and Real Estate Services, LLC MLS system<br/>The real estate listing data marked with this icon  comes from the IDX program of the IRES Multiple Listing Service™ system. Information source: Information and Real Estate Services, LLC. Provided for limited non-commercial use only under IRES Rules. © Copyright IRES.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    523: {
        description: 'Pikes Peak MLS',
        disclaimer:
            "Pikes Peak Multiple Listing Service™<br/>The real estate listing information and related content displayed on this site is provided exclusively for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. This information and related content is deemed reliable but is not guaranteed accurate by the Pikes Peak REALTOR® Services Corp. ",
        disclaimerDPP:
            "The real estate listing information and related content displayed on this site is provided exclusively for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. This information and related content is deemed reliable but is not guaranteed accurate by the Pikes Peak REALTOR® Services Corp.",
        disclaimerSoldDpp:
            "The real estate listing information and related content displayed on this site is provided exclusively for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. This information and related content is deemed reliable but is not guaranteed accurate by the Pikes Peak REALTOR® Services Corp.",
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    561: {
        description: 'InterMountain MLS',
        disclaimer:
            "InterMountain Multiple Listing Service™ system<br/>IDX information is provided exclusively for consumers' personal, non-commercial use, it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. IMLS does not assume any liability for missing or inaccurate data. Information provided by IMLS is deemed reliable but not guaranteed.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    562: {
        description: "Couer D'alene MLS",
        disclaimer:
            '18.3.4 Participants (and their affiliated licensees, if applicable) shall indicate on their Websites that IDX information is provided by the Coeur d鈥橝lene Multiple Listing Service exclusively for consumers鈥 personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Data is deemed reliable but is not guaranteed accurate by the MLS.鈥 The MLS may, at its discretion, require use of other disclaimers as necessary to protect participants and/or the MLS from liability. (Amended 5/17)',
        disclaimerDPP: '',
        disclaimerMap: '',
        dpp: [],
        map: [],
        sold: []
    },
    563: {
        description: 'Snake River MLS',
        disclaimer: `Copyright ${year} of Snake River MLS. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the Snake River MLS.`,
        vdpp: ['hideSold']
    },
    571: {
        description: 'Realtracs MLS',
        disclaimer:
            'Middle Tennessee Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Middle Tennessee Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    572: {
        description: 'Knoxville Area Association of Realtors MLS',
        disclaimer:
            'Knoxville Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Knoxville Multiple Listing Service™ system. IDX information is provided exclusively for consumers™ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that the data is deemed reliable but is not guaranteed accurate by the MLS.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    573: {
        description: 'Memphis Area Association of REALTORS®',
        disclaimer:
            "Memphis Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Memphis Multiple Listing Service™ system.<br/>Some or all of the listings displayed may not belong to the firm whose website is being visited. Copyright© 2015 Memphis Area Association of REALTORS®. The information provided is for the consumer's personal, noncommercial use and may not be used for any purpose other than to identify prospective properties that the consumer may be interested in purchasing. Information deemed reliable, but is not guaranteed accurate. Some or all of the listings displayed may not belong to the firm whose web site is being visited.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    574: {
        description: 'Tennessse Virginia Regional MLS',
        disclaimer:
            "Tennessse Virginia Regional Multiple Listing Service™ system<br/>Listings provided is for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    575: {
        description: 'Greater Chattanooga Association of REALTORS®',
        disclaimer:
            "Greater Chattanooga Association of REALTORS™ system<br/>Listings provided is for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing."
    },
    576: {
        description: 'River Counties MLS',
        disclaimer: `Copyright ${year} of River Counties MLS. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the River Counties MLS.`
    },
    611: {
        description: 'Heartland MLS ',
        disclaimer:
            'Heartland Multiple Listing Service™ system<br/>The information displayed on this page is confidential, proprietary, and copyrighted information of Heartland Multiple Listing Service, Inc. ("Heartland MLS"). ©' +
            year +
            '. , Heartland MultipleListing Service, Inc. Heartland MLS and Movoto LLC. do not make any warranty or representation concerning the timeliness or accuracy of the information displayed herein. In consideration for the receipt of the information on this page, the recipient agrees to use the information solely for the private noncommercial purpose of identifying a property in which the recipient has a good faith interest in acquiring.  <a href="' +
            staticUrl +
            'static/disclaimers/mls611-heartland.pdf" target="_blank" rel="nofollow">Heartland MLS Terms of Use</a>',
        disclaimerDPP:
            'Heartland Multiple Listing Service, Inc. Heartland MLS and Movoto LLC. do not make any warranty or representation concerning the timeliness or accuracy of the information displayed herein. In consideration for the receipt of the information on this page, the recipient agrees to use the information solely for the private noncommercial purpose of identifying a property in which the recipient has a good faith interest in acquiring. <a href="' +
            staticUrl +
            'static/disclaimers/mls611-heartland.pdf" target="_blank" rel="nofollow">Heartland MLS Terms of Use</a>',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: ['showBroker']
    },
    612: {
        description: 'South Central Kansas MLS',
        disclaimer: `Copyright ${year} of  South Central Kansas MLS. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the  South Central Kansas MLS.`
    },
    621: {
        description: 'Birmingham Area MLS',
        disclaimer:
            "Birmingham Multiple Listing Service™ system<br/>Listing data comes from the Birmingham Area Multiple Listing Service, Inc. The IDX information is provided exclusively for consumers' personal, non-commercial use, that may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Content not guaranteed accurate by the MLS.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        dppBroker: 'Kevin Blair<br/>205-543-0565<br/>License# 95484',
        dppBrokerInfo: {
            dppBrokerName: 'Kevin Blair',
            dppBrokerPhone: '2052873788',
            dppBrokerLicense: '95484'
        },
        vmapsearch: []
    },
    622: {
        description: 'NALMLS™ MLS',
        disclaimer:
            'The data relating to Movoto Real Estate on this Web site derive in part from the ValleyMLS.com IDX datashare program. © ValleyMLS.com, Inc. All information provided is deemed reliable but is not guaranteed and should be independently verified.',
        disclaimerDPP: '',
        disclaimerMap: '',
        dppBroker: 'Kevin Blair 205-543-0565<br/>kevin.blair@movoto.com<br/>License # 95484',
        dppBrokerInfo: {
            dppBrokerName: 'Kevin Blair',
            dppBrokerPhone: '2052873788',
            dppBrokerLicense: '95484',
            dppBrokerEmail: 'kevin.blair@movoto.com'
        },
        vdpp: ['showFirmUnderPhoto', 'hideSold'],
        vmapsearch: ['showMLSLogo']
    },
    623: {
        description: 'Baldwin Realtors',
        disclaimer:
            'Copyright ' +
            year +
            ' of Baldwin Realtors. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the Baldwin Realtors.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo'],
        vmapsearch: ['showMLSLogo']
    },
    624: {
        description: 'Gulf Coast MLS/Mobile AOR',
        disclaimer:
            'Copyright ' +
            year +
            ' of Gulf Coast Multiple Listing Service, Inc. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the GCMLS/MAAR',
        disclaimerDPP: '',
        disclaimerMap: '',
        vmapsearch: [],
        vdpp: ['hideSold']
    },
    651: {
        description: 'Regional Multiple Listing Service of Minnesota, Inc',
        disclaimer:
            'NorthStar Multiple Listing Service™ system<br/>The data relating to real estate for sale on this web site comes in part from the Broker Reciprocity SM Program of the Regional Multiple Listing Service of Minnesota, Inc. Real estate listings held by brokerage firms other than Movoto are marked with the Broker Reciprocity SM logo or the Broker Reciprocity SM thumbnail logo (a little black house) and detailed information about them includes the name of the listing brokers. Data is deemed reliable but not guaranteed. The data relating to real estate for sale on this web site comes in part from the Broker ReciprocitySM Program of the Regional Multiple Listing Service of Minnesota, Inc. Copyright © ' +
            year +
            ' Regional Multiple Listing Service of Minnesota, Inc. All rights reserved.',
        disclaimerDPP:
            'The data relating to real estate for sale on this web site comes in part from the Broker Reciprocity SM Program of the Regional Multiple Listing Service of Minnesota, Inc. Real estate listings held by brokerage firms other than Movoto are marked with the Broker Reciprocity SM logo or the Broker Reciprocity SM thumbnail logo (a little black house) and detailed information about them includes the name of the listing brokers. ',
        disclaimerMap:
            'By searching you agree to RMLS\'s <a href="' +
            staticUrl +
            'static/disclaimers/RMLS_EULA.pdf" target="_blank" rel="nofollow">End User License Agreement</a>',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    662: {
        description: 'South Central Wisconsin MLS Corporation',
        disclaimer:
            'South Central Wisconsin Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the South Central Wisconsin Multiple Listing Service™ system. IDX information is provided exclusively for consumers’ personal, non-commercial use and that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. This information, provided by seller, listing broker, and other parties, may not have been verified.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showFirmUnderPhoto', 'showAgentOnFirstPage', 'hideHistory', 'showOfficeAtFirstPicture'],
        vmapsearch: []
    },
    663: {
        description: 'Metro MLS',
        disclaimer:
            "METRO Multiple Listing Service™ system<br/>Listings with this icon come from the Metro ™ MLS system. Information is supplied by seller and other third parties and has not been verified. Listings provided for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. © " +
            year +
            ' Multiple Listing Service, Inc. All Rights Reserved.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: ['showBroker']
    },
    664: {
        description: 'RANW',
        disclaimer:
            'RANW Multiple Listing Service™ system<br/>Information received from other 3rd parties. All information deemed reliable but not guranteed and should be independently verified. All properties are subject to prior sale, change, or withdrawal. Neither listing broker nor Movoto nor RANW MLS shall be responsible for any typographical errors, misinforrmation, misprints, and shall be held totally harmless.',
        disclaimerDPP:
            'Neither listing broker nor Movoto nor RANW MLS shall be responsible for any typographical errors, misinforrmation, misprints, and shall be held totally harmless.',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    691: {
        description: 'Mid America Regional Information Systems ',
        disclaimer:
            'Mid America Regional Information Systems.<br/>The real estate listing data marked with this icon comes from the IDX program of the Mid America Regional Information Systems.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    692: {
        description: 'Southern Missouri Regional MLS ',
        disclaimer:
            'Southern Missouri Regional Multiple Listing Service™ system<br/>The IDX Database is provided courtesy of the Southern Missouri Regional MLS, LLC. Real estate listings held by Brokerage firms other than Movoto are marked with the IDX logo and detailed information about them includes the name of the listing Brokers. The information being provided is for consumers’ personal, noncommercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. The information being provided is not guaranteed, and all information should be verified by the consumer. Any representation that a web site contains all listings shall only mean that the web site contain all listing available to the public through the IDX data feed. There may be other properties offered through a REALTOR® that have not been displayed on this site. © ' +
            year +
            ' Southern Missouri Regional MLS, LLC. All rights reserved.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold', 'showMLSLogo'],
        vmapsearch: []
    },
    721: {
        description: 'New Orleans Metropolitan Association of REALTORS®, Inc',
        disclaimer:
            'GSREIN Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the GSREIN Multiple Listing Service™ system.<br/>(i) Copyright ' +
            year +
            ' New Orleans Metropolitan Association of REALTORS®, Inc.  All rights reserved.  The sharing of MLS database, or any portion thereof, with any unauthorized third party is strictly prohibited.<br/>(ii) Information contained on this site is believed to be reliable; yet, users of this web site are responsible for checking the accuracy, completeness, currency, or suitability of all information.  Neither the New Orleans Metropolitan Association of REALTORS®, Inc. nor the Gulf South Real Estate Information Network, Inc. makes any representation, guarantees, or warranties as to the accuracy, completeness, currency, or suitability of the information provided.  They specifically disclaim any and all liability for all claims or damages that may result from providing information to be used on the web site, or the information which it contains, including any web sites maintained by third parties, which may be linked to this web site.<br/>(iii) The information being provided is for the consumer’s personal, non-commercial use, and may not be used for any purpose other than to identify prospective properties which consumers may be interested in purchasing.  The user of this site is granted permission to copy a reasonable and limited number of copies to be used in satisfying the purposes identified in the preceding sentence.<br/>(iv) By using this site, you signify your agreement with and acceptance of these terms and conditions.  If you do not accept this policy, you may not use this site in any way.  Your continued use of this site, and/or its affiliates’ sites, following the posting of changes to these terms will mean you accept those changes, regardless of whether you are provided with additional notice of such changes.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    722: {
        description: 'Greater Baton Rouge Association of Realtors / GBRAR MLS',
        disclaimer:
            'Copyright ' +
            year +
            ' of Greater Baton Rouge Association of Realtors. All rights reserved.<br />IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the GBRAR',
        disclaimerDPP: '',
        disclaimerMap: '',
        vmapsearch: [],
        vdpp: ['hideSold']
    },
    741: {
        description: 'OKC Metro Association of Realtors MLS',
        disclaimer:
            'Oklahoma City Multiple Listing Service™ system<br/>Listing Provided by OKC Metro Association of Realtors, Inc. All information is deemed reliable buy not guaranteed and should be independently verified. Listing information was last updated on ' +
            updateDate +
            ". IDX information is provided exclusively for consumers' personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that the data is deemed reliable but is not guaranteed accurate by the MLS.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    811: {
        description: 'CoastalCarolinas MLS',
        disclaimer:
            'Coastal Carolinas Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Coastal Carolinas Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    812: {
        description: 'CharlestonTrident MLS',
        disclaimer:
            'Charleston Trident Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Charleston Trident Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo'],
        vmapsearch: []
    },
    813: {
        description: 'Spartanbug MLS',
        disclaimer:
            'Spartanburg Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Spartanburg Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        dppBroker: 'Randall Chapman 803-524-6995<br/>License#:16857',
        dppBrokerInfo: {
            dppBrokerName: 'Randall Chapman',
            dppBrokerPhone: '8038454242',
            dppBrokerLicense: '16857'
        },
        vmapsearch: []
    },
    814: {
        description: 'Consolidated MLS MLS',
        disclaimer:
            'Consolidated Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Consolidated Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    821: {
        description: 'StateWide MLS',
        disclaimer:
            'Statewide Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Statewide Multiple Listing Service™ system.<br/>The data relating to real estate for sale on this web site comes in part from the IDX Program of the State-Wide Multiple Listing Service, Inc. Real estate listings held by Movoto, Inc. are marked with the MLS logo and detailed information about them includes the name of the listing brokers. Information deemed reliable but not guaranteed. Any use of search facilities of data on the site other than by a consumer seeking to purchase real estate is prohibited. Copyright© ' +
            year +
            ' State-Wide MLS, Inc. All rights reserved.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo', 'hotleadBelowHouseInfo'],
        vmapsearch: ['showMLSLogo']
    },
    831: {
        description: 'Northern Ohio Regional MLS',
        disclaimer:
            'Northern Ohio Regional/NEOHREX Multiple Listing Service™ system<br/>The real estate listing data marked with this icon comes from the IDXP program of the NORMLS Internet Data Exchange database',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    832: {
        description: 'Western Ohio Regional Multiple Listing Service MLS',
        disclaimer:
            'Western Ohio Regional Multiple Listing Service MLS™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Western Ohio Regional Multiple Listing Service MLS™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    833: {
        description: 'Dayton Area Board of REALTORS®',
        disclaimer:
            "Dayton Ohio Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Dayton Ohio Multiple Listing Service™ system .Information being provided is for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Information Deemed Reliable But Not Guaranteed.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo'],
        vmapsearch: []
    },
    834: {
        description: 'MLS of Greater Cincinnati, Inc.',
        disclaimer:
            'Greater Cincinnati Multiple Listing Service™ system<br/>Listing broker has attempted to offer accurate data, but buyers are advised to confirm all information.The broker providing this data believes it to be correct, but advises interested parties to confirm all information before relying on it in a purchase decision. © ' +
            year +
            ' MLS of Greater Cincinnati, Inc. All rights reserved.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        dppBroker: 'Mike R. Coyne Jr. 216-310-1989<br/>License#:REC.201`100`1469',
        dppBrokerInfo: {
            dppBrokerName: 'Mike R. Coyne Jr.',
            dppBrokerPhone: '2163580816',
            dppBrokerLicense: 'REC.2011001469'
        },
        vmapsearch: []
    },
    835: {
        description: 'Columbus MLS',
        disclaimer:
            "Columbus Multiple Listing Service™ system<br/>Information is provided exclusively for consumers' personal, non-commercial use; the information is to not be used in any other manner aside from identifying prospective properties for consumers.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showBrokerPhoneNumber', 'showBroker', 'showAgent'],
        dppBrokerInfo: {
            dppBrokerName: 'Mike R. Coyne Jr.',
            dppBrokerPhone: '2163101989',
            dppBrokerLicense: 'REC.2011001469'
        },
        vmapsearch: ['showBroker', 'showAgent']
    },
    836: {
        description: 'Toledo Regional Association of Realtors',
        disclaimer:
            'Toledo Regional Association of Realtors™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Toledo Regional Association of Realtors™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    841: {
        description: 'Realcomp MLS ',
        disclaimer:
            'Realcomp Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Realcomp Multiple Listing Service™ system.',
        disclaimerDPP:
            'IDX provided courtesy of Realcomp II Ltd. via Movoto LLC ' +
            listingOfficeName +
            ', ©' +
            year +
            ' Realcomp II Ltd. Shareholders',
        disclaimerMap: '',
        disclaimerSoldDpp:
            'IDX provided courtesy of Realcomp II Ltd. via Movoto LLC ' +
            listingOfficeName +
            ', ©' +
            year +
            ' Realcomp II Ltd. Shareholders',
        vdpp: ['showFirmUnderPhoto', 'showMLSLogo'],
        dppBroker: 'Pierre LeBlanc (313) 288-8130<br/>License # 6505359838<br/>547 E. Jefferson, Detroit',
        vmapsearch: ['showMLSLogo', 'showBroker', 'onlyFirstPicture'],
        dppBrokerInfo: {
            dppBrokerName: 'Pierre LeBlanc',
            dppBrokerPhone: '3132610165',
            dppBrokerLicense: '6505359838',
            dppBrokerAddress: '547 E. Jefferson, Detroit'
        },
        disclaimerUnderBasicInfo:
            'IDX provided courtesy of Realcomp II Ltd. via Movoto LLC ' +
            listingOfficeName +
            ', ©' +
            year +
            ' Realcomp II Ltd. Shareholders'
    },
    842: {
        description: 'The Northern Great Lakes REALTORS® MLS',
        disclaimer:
            'The Northern Great Lakes REALTORS™ system<br/>The real estate listing data marked with this icon comes from the IDX program of the Realcomp Multiple Listing Service™ system.'
    },
    843: {
        description: 'MichRIC Multiple Listing Service system',
        disclaimer:
            'MichRIC Multiple Listing Service™ system<br/>The real estate listing data marked with this icon comes from the IDX program of the MichRIC Multiple Listing Service™ system. Copyright ' +
            year +
            ' MichRIC, LLC. All rights reserved.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        dppBroker: 'Pierre LeBlanc (313) 288-8130<br/>License # 6505359838<br/>547 E. Jefferson, Detroit',
        dppBrokerInfo: {
            dppBrokerName: 'Pierre LeBlanc',
            dppBrokerPhone: '3132610165',
            dppBrokerLicense: '6505359838',
            dppBrokerAddress: '547 E. Jefferson, Detroit'
        },
        vmapsearch: []
    },
    844: {
        description: 'ECAR MLS',
        disclaimer:
            "ECAR Multiple Listing Service™ system<br/>Information is provided exclusively for consumers' personal, non-commercial use; the information is to not be used in any other manner aside from identifying prospective properties for consumers.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    845: {
        description: 'Water Wonderland MLS - WWLX',
        disclaimer:
            'Copyright ' +
            year +
            ' of Water Wonderland Board of Realtors. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the WWLX.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo'],
        vmapsearch: ['showMLSLogo']
    },
    851: {
        description: 'Metropolitan Indianapolis Board of REALTORS®',
        disclaimer:
            "MIBOR Multiple Listing Service™ system<br/>All information is provided exclusively for consumers' personal, non-commercial use, and may not be used for any purpose other than to identify prospective properties that a consumer may be interested in purchasing. All information is believed to be reliable but is not guaranteed and should be independently verified. ©" +
            year +
            ' Metropolitan Indianapolis Board of REALTORS®. All rights reserved.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    852: {
        description: 'IRMLS',
        disclaimer:
            "IRMLS Multiple Listing Service™ system<br/>Information is provided exclusively for consumers' personal, non-commercial use; the information is to not be used in any other manner aside from identifying prospective properties for consumers.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    861: {
        description: 'Metro Search, Inc.',
        disclaimer:
            'Louisville Multiple Listing Service™ system<br/>The data relating to real estate for sale on this web site comes in part from the Internet Data Exchange Program of Metro Search, Inc. Real estate listings held by brokerage firms other than Movoto are marked with the Internet Data Exchange logo or the Internet Data Exchange thumbnail logo and detailed information about each listing includes the name of the listing broker. IDX information is provided exclusively for consumers’ personal, noncommercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that the data is deemed reliable but is not guaranteed accurate by the MLS. The MLS may, at its discretion, require use of other disclaimers as necessary to protect participants and/or the MLS from liability. ',
        disclaimerDPP: '',
        disclaimerMap: '',
        disclaimerMobileMap:
            'Listings with this icon are © ' +
            year +
            " of Metro Search, Inc. All Rights Reserved.Information deemed reliable but not guaranteed accurate. Buyer to verify all information. <br/>The information provided is for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing.",
        disclaimerMobileDPP:
            'The multiple listing information is provided by Metro Search, Inc. © ' +
            year +
            " Metro Search, Inc. <br/>All Rights Reserved. Information deemed reliable but not guaranteed accurate. This information should be independently verified if any person intends to engage in a transaction in reliance upon it. The information provided is for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Some or all of the listings displayed may not belong to the firm whose web site is being visited. Listing information updated daily. This listing was retrieved on " +
            updateDate +
            '',
        vdpp: [],
        vmapsearch: ['showDisclaimerOnMobileMap']
    },
    862: {
        description: 'Lexington-Bluegrass Association of Realtors Multiple Listing Service',
        disclaimer:
            "Lexington Multiple Listing Service™ system<br/>The data relating to real estate for sale on this web site comes in part from the Internet Data Exchange Program of the Lexington-Bluegrass Association of Realtors Multiple Listing Service, Real estate listings held by IDX Brokerage firms other than Movoto's are marked with the IDX Logo or the IDX thumbnail logo and detailed information about them includes the name of the listing IDX Brokers. Data deemed reliable but not guaranteed and should be independently verified. ©" +
            year +
            ' LBAR Multiple Listing Service. All rights reserved.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    871: {
        description: 'Hawaii Information Service MLS',
        disclaimer:
            "Hawaii Information Service Multiple Listing Service™ system<br/>IDX information is provided exclusively for consumers' personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that the data is deemed reliable but is not guaranteed accurate by the MLS. © 2015 MLS Hawaii, Inc. All rights reserved.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo'],
        vmapsearch: []
    },
    872: {
        description: 'REALTORS Association of Maui',
        disclaimer:
            "REALTORS Association of Maui™ system<br/>IDX information is provided exclusively for consumers' personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that the data is deemed reliable but is not guaranteed accurate by the MLS. © " +
            year +
            ' REALTORS Association of Maui. All rights reserved.'
    },
    881: {
        description: 'North Central WV MLS™ MLS',
        disclaimer:
            'North Central WV Multiple Listing Service™ system<br/>The data relating to real estate on this website derive in part from the Internet Data Exchange program. Brokers make an effort to deliver accurate information, but buyers should independently verify any information on which they will rely in a transaction. All properties are subject to prior sale, change or withdrawal. Neither Movoto nor any listing broker shall be responsible for any typographical errors, misinformation, or misprints, and they shall be held totally harmless from any damages arising from reliance upon this data. This data is provided exclusively for consumers’ personal, non-commercial use and may not be used for any purpose other than to identify prospective properties they may be interested in purchasing. © ' +
            year +
            ' Carolina Multiple Listing Services, Inc.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo'],
        dppBroker: 'Stephen Carvelli<br/>License#:005047<br/>North Central WV Real Estate Network, Inc.',
        dppBrokerInfo: {
            dppBrokerName: 'Stephen Carvelli',
            dppBrokerLicense: '005047',
            dppBrokerOffice: 'North Central WV Real Estate Network, Inc.'
        },
        vmapsearch: []
    },
    890: {
        description: 'New England Real Estate Network, Inc',
        disclaimer:
            'The multiple listing information is provided by <img class="img-mlslogo " src="' +
            cdnUrl +
            'images/desktop/logo/logo_890.png"> New England Real Estate Network, Inc. Copyright © ' +
            year +
            ' New England Real Estate Network, Inc. All rights reserved. This information is deemed reliable, but not guaranteed. The data relating to real estate displayed on this site comes in part from the IDX Program of NEREN. The information being provided is for consumers’ personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Data last updated ' +
            updateDate +
            '.',
        disclaimerDPP:
            'The multiple listing information is provided by <img class="img-mlslogo " src="' +
            cdnUrl +
            'images/desktop/logo/logo_890.png"> New England Real Estate Network, Inc. Copyright © ' +
            year +
            ' New England Real Estate Network, Inc. All rights reserved. This information is deemed reliable, but not guaranteed. The data relating to real estate displayed on this site comes in part from the IDX Program of NEREN. The information being provided is for consumers’ personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Data last updated ' +
            updateDate +
            '.',
        disclaimerMap:
            'The multiple listing information is provided by <img class="img-mlslogo " src="' +
            cdnUrl +
            'images/desktop/logo/logo_890.png"> New England Real Estate Network, Inc. Copyright © ' +
            year +
            ' New England Real Estate Network, Inc. All rights reserved. This information is deemed reliable, but not guaranteed. The data relating to real estate displayed on this site comes in part from the IDX Program of NEREN. The information being provided is for consumers’ personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Data last updated ' +
            updateDate +
            '.',
        vdpp: ['showMLSLogo', 'showAgentOnFirstPage', 'showNotSuportByMLS', 'ShowUnNormalDisclaimerOnDpp'],
        vmapsearch: ['showMLSLogo'],
        asyncDisclaimer:
            'The multiple listing information is provided by <img class="img-mlslogo " src="' +
            cdnUrl +
            'images/desktop/logo/logo_890.png"> New England Real Estate Network, Inc. Copyright © ' +
            year +
            ' New England Real Estate Network, Inc. All rights reserved. This information is deemed reliable, but not guaranteed. The data relating to real estate displayed on this site comes in part from the IDX Program of NEREN. The information being provided is for consumers’ personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Data last updated ' +
            updateDate +
            '.',
        home: ['asyncDisclaimer']
    },
    900: {
        description: 'Great Plains Omaha Realtors MLS',
        disclaimer:
            "Great Plains Omaha Multiple Listing Service™ system<br/>Information is provided exclusively for consumers' personal, non-commercial use; the information is to not be used in any other manner aside from identifying prospective properties for consumers. © " +
            updateDate +
            ' Great Plains Realtors. All rights reserved.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    910: {
        description: 'Alaska Multiple Listing Service, Inc.',
        disclaimer:
            "The listing content relating to real estate for sale on this web site comes in part from the IDX Program of Alaska Multiple Listing Service, Inc. (AK MLS). Real estate listings held by brokerage firms other than Movoto are marked with either the listing brokerage's logo or the AK MLS logo and information about them includes the name of the listing brokerage.   All information is deemed reliable but is not guaranteed and should be independently verified for accuracy.<br/> Listing information was last updated on: " +
            updateDate +
            '.',
        disclaimerDPP:
            "The listing content relating to real estate for sale on this web site comes in part from the IDX Program of Alaska Multiple Listing Service, Inc. (AK MLS). Real estate listings held by brokerage firms other than Movoto are marked with either the listing brokerage's logo or the AK MLS logo and information about them includes the name of the listing brokerage.   All information is deemed reliable but is not guaranteed and should be independently verified for accuracy.<br/> Listing information was last updated on: " +
            updateDate +
            '.',
        disclaimerMap:
            "The listing content relating to real estate for sale on this web site comes in part from the IDX Program of Alaska Multiple Listing Service, Inc. (AK MLS). Real estate listings held by brokerage firms other than Movoto are marked with either the listing brokerage's logo or the AK MLS logo and information about them includes the name of the listing brokerage.   All information is deemed reliable but is not guaranteed and should be independently verified for accuracy.<br/> Listing information was last updated on: " +
            updateDate +
            '.',
        vdpp: ['showMLSLogo', 'showBroker', 'hotleadBelowHouseInfo'],
        dppBroker: 'Frederick Finrow 425-478-8975<br/>License#:18503',
        dppBrokerInfo: {
            dppBrokerName: 'Frederick Finrow',
            dppBrokerPhone: '9073138746',
            dppBrokerLicense: '18503'
        },
        vmapsearch: ['showMLSLogo', 'showBroker'],
        mobilePhone: '425-478-8975',
        desktopPhone: '425-478-8975'
    },
    920: {
        description: 'Arkansas MLS',
        disclaimer:
            "Cooperative Arkansas Realtors MLS Inc Multiple Listing Service™ system<br/>The real estate listing data marked with this icon come from Cooperative Arkansas Realtors MLS Multiple Listing Service™ system. The IDX information is provided exclusively for consumers' personal, non-commercial use that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the MLS.Information deemed reliable, but not guaranteed.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    921: {
        description: 'NWABOR™ MLS',
        disclaimer:
            'NWABOR Multiple Listing Service™ system<br/>IDX information is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that the data is deemed reliable but is not guaranteed accurate by Arkansas Regional ML',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    930: {
        description: 'Connecticut MLS',
        disclaimer:
            'Connecticut Multiple Listing Service™ system<br/>The real estate listing data marked with this icon  comes from the IDX program of the Connecticut Multiple Listing Service™ system.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: [],
        vmapsearch: []
    },
    940: {
        description: 'Des Moines Area Association MLS system',
        disclaimer:
            "Des Moines Area Association Multiple Listing Service™ system<br/>IDX information is provided exclusively for consumers' personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that the data is deemed reliable but is not guaranteed accurate by the MLS.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideListingPriceAndDate', 'onlyFirstPicture'],
        vmapsearch: []
    },
    941: {
        description: 'Cedar Rapids MLS',
        disclaimer: `Copyright ${year} of Cedar Rapids MLS. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the Cedar Rapids MLS.`
    },
    950: {
        description: 'Maine IDX',
        disclaimer:
            "MREIS Multiple Listing Service™ system<br/>Listing data is derived in whole or in part from the Maine IDX & is for consumers' personal, noncommercial use only. Dimensions are approximate and not guaranteed. All data should be independently verified. © " +
            year +
            ' Maine Real Estate Information System, Inc. All Rights Reserved',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['onlyFirstPicture'],
        vmapsearch: []
    },
    960: {
        description: 'Jackson MLS',
        disclaimer:
            "Jackson Multiple Listing Service™ system<br/>IDX information is provided exclusively for consumers' personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that the data is deemed reliable but is not guaranteed accurate by the MLS.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    961: {
        description: 'Mississippi Gulf Coast Multiple Listing Service, Inc.',
        disclaimer:
            'Copyright ' +
            year +
            ". Mississippi Gulf Coast Multiple Listing Service, Inc. Buyer and/or Buyer's Agent should verify data and evaluate source. This information is furnished by the Mississippi Gulf Coast Multiple Listing Service, Inc. This data is copyrighted and may not be transmitted, retransmitted, copied, framed, repurposed, or altered in any way for any other site, individual and/or purpose without the express written permission of the Mississippi Gulf Coast Multiple Listing Service, Inc. All properties are subject to prior sale, change or withdrawal. Neither the MLS nor the Listing Broker will be held responsible for any typographical errors, misinformation and misprints and shall be held totally harmless.",
        disclaimerDPP:
            'Copyright ' +
            year +
            ". Mississippi Gulf Coast Multiple Listing Service, Inc. Buyer and/or Buyer's Agent should verify data and evaluate source. This information is furnished by the Mississippi Gulf Coast Multiple Listing Service, Inc. This data is copyrighted and may not be transmitted, retransmitted, copied, framed, repurposed, or altered in any way for any other site, individual and/or purpose without the express written permission of the Mississippi Gulf Coast Multiple Listing Service, Inc. All properties are subject to prior sale, change or withdrawal. Neither the MLS nor the Listing Broker will be held responsible for any typographical errors, misinformation and misprints and shall be held totally harmless.",
        disclaimerMap:
            'Copyright ' +
            year +
            ". Mississippi Gulf Coast Multiple Listing Service, Inc. Buyer and/or Buyer's Agent should verify data and evaluate source. This information is furnished by the Mississippi Gulf Coast Multiple Listing Service, Inc. This data is copyrighted and may not be transmitted, retransmitted, copied, framed, repurposed, or altered in any way for any other site, individual and/or purpose without the express written permission of the Mississippi Gulf Coast Multiple Listing Service, Inc. All properties are subject to prior sale, change or withdrawal. Neither the MLS nor the Listing Broker will be held responsible for any typographical errors, misinformation and misprints and shall be held totally harmless.",
        vdpp: [],
        vmapsearch: []
    },
    962: {
        description: 'Central Mississippi MLS',
        disclaimer:
            'Copyright ' +
            year +
            ' of Central Mississippi MLS, Inc. All rights reserved.<br />IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the Central Mississippi MLS, Inc.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vmapsearch: [],
        vdpp: ['hideSold']
    },
    970: {
        description: 'Montana Regional MLS',
        disclaimer:
            "Montana Regional Multiple Listing Service™ system<br/>IDX information is provided exclusively for consumers' personal non-commercial use. All information is deemed reliable but not guaranteed and should be independently verified. All properties are subject to prior sale, change, or withdrawal. Neither Stacy DiMaggio-Good shall be responsible for any typographical errors, misinformation, misprints, and shall be held harmless. © " +
            year +
            ' Missoula County Association of REALTORS®, Inc. All rights reserved.Information last updated on ' +
            updateDate +
            '.',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    971: {
        description: 'Big Sky Country MLS/Gallatin AOR',
        disclaimer: `Copyright ${year} of Big Sky County MLS. All rights reserved.<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the Big Sky County MLS.`
    },
    980: {
        description: 'Black Hills Association of Realtors MLS',
        disclaimer:
            "Black Hills Association of Realtors Multiple Listing Service™ system<br/>IDX information is provided exclusively for consumers' personal, non-commercial use and may not be used for any purpose other than to identify prospectieve properties consumers may be interseted in purchasing and that the data is deemed reliable but is not gauranted accurate by the mls.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo'],
        vmapsearch: []
    },
    992: {
        description: 'Southwest-NMSWMLS MLS',
        disclaimer:
            "Southwest-NMSWMLS Multiple Listing Service™ system<br/>IDX information is provided exclusively for consumers' personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that the data is deemed reliable but is not guaranteed accurate.",
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    },
    993: {
        description: 'Wyoming MLS',
        disclaimer:
            'Wyoming MLS system<br/>IDX information is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing and that the data is deemed reliable but is not guaranteed accurate by the MLS. ',
        disclaimerDPP: '',
        disclaimerMap: '',
        vdpp: ['showMLSLogo'],
        vmapsearch: []
    },
    994: {
        description: 'Santa Fe AOR MLS',
        disclaimer: `Copyright ${year} of  Santa Fe AOR MLS. All rights reserved<br/>IDX Data is provided exclusively for consumers’ personal, non-commercial use, that it may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing, and that data is deemed reliable but is not guaranteed accurate by the Santa Fe AOR.`
    },
    999: {
        description: 'Williamsburg MLS',
        disclaimer:
            'The data relating to real estate for sale on this website comes in part from the Internet Data Exchange Program of the WMLS. Real estate listings held by brokerage firms other than Movoto are marked with the Internet Data Exchange logo or the Internet Data Exchange brief/thumbnail logo and detailed information about them includes the name of the listing firms.',
        disclaimerDPP:
            'The property data as provided by Movoto is believed to be correct, however, interested parties are advised to confirm the information prior to making a purchase decision.” OR “Movoto has attempted to offer accurate data, but interested parties are advised to confirm all property information.” OR “All information is deemed reliable but not guaranteed. The listings on this site are displayed courtesy of the IDX program of WMLS and may not be the listings of the site owner.',
        disclaimerMap: '',
        vdpp: ['hideSold'],
        vmapsearch: []
    }
}
const res = {};
for(var key of Object.keys(data) ){
    const compArr = [];
    if(data[key]['vdpp']){
        compArr.push(...data[key]['vdpp']);
    }
    if(data[key]['vmapsearch']){
        for(var c in data[key]['vmapsearch']){
            const dd =data[key]['vmapsearch'][c];
            if(!compArr.includes(dd)){
                compArr.push(dd);
            }
        }
    }

    compArr.push('HelloWorld');
    compArr.push('HelloWorld');
    compArr.push('HelloWorld');
    compArr.push('HelloWorld');
    compArr.push('HelloWorld');
    res[key] = {
        name : data[key]['description'],
        compliance: compArr
    }
}

console.log(JSON.stringify(res));
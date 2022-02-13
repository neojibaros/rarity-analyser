const config = {
    app_name: 'Cool Rarity',
    app_description: 'Cool Rarity is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: 'collection.json',
    collection_contract_address: '0x1b1f33a9eef47565d195e1943845aac1777312b8',
    collection_name: 'Jibaros',
    collection_description: '10k "One Day I\'ll Be A Punk"-punks – a homage to the one and only CryptoPunks. Holding a OneDayPunk will give you early access to PunkScapes and reserve a profile on the PunkScape website.',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database.sqlite',
    ga: 'G-BW69Z04YTP',
    main_og_image: 'https://onedaypunk-rarity-tool.herokuapp.com/images/og.png',
    item_path_name: 'jibaro',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'circle', // circle, rectangle
    use_wallet: false
};

module.exports = config;
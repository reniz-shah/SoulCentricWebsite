async function fetchAndDisplayProducts() {
    try {
        const categoriesData = [
            {
                "id": "1",
                "name": "Green Powders",
                "description": "Green Powders Description Very well product",
                "image": "https://picsum.photos/900",
                "products": [
                    {
                        "id": "1",
                        "name": "Health Care Powder (Wheat Grass + Moringa Leaf+ Spirulina)",
                        "description": "Health Care Powder (Wheat Grass + Moringa Leaf+ Spirulina) Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "100g (Pouch/ Jar)"
                        ]
                    },
                    {
                        "id": "2",
                        "name": "Neo Health Powder (Wheat Grass + Barley Grass + Alfa Alfa)",
                        "description": "Neo Health Powder (Wheat Grass + Barley Grass + Alfa Alfa) Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "200g (Pouch)"
                        ]
                    },
                    {
                        "id": "3",
                        "name": "Wheat Grass Powder",
                        "description": "Wheat Grass Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "4",
                        "name": "Barley Grass Powder",
                        "description": "Barley Grass Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "5",
                        "name": "Alfa Alfa Powder",
                        "description": "Alfa Alfa Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "6",
                        "name": "Spirulina Powder",
                        "description": "Spirulina Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    }
                ]
            },
            {
                "id": "2",
                "name": "Health And Wellness Powders",
                "description": "Health And Wellness Powders Description Very well product",
                "image": "https://picsum.photos/900",
                "products": [
                    {
                        "id": "1",
                        "name": "Desi Protein (Blend of Roasted Chikpea and other herbs)",
                        "description": "Desi Protein (Blend of Roasted Chikpea and other herbs) Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "100g (Pouch/ Jar)",
                            "200g (Pouch)"
                        ]
                    },
                    {
                        "id": "2",
                        "name": "Organic jaggery Powder",
                        "description": "Organic jaggery Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "750g (Pouch)",
                            "1Kg (Pouch)",
                            "5Kg (Jar)"
                        ]
                    },
                    {
                        "id": "3",
                        "name": "Pure and Natural Ghee",
                        "description": "Pure and Natural Ghee Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "500ml (Jar)",
                            "1ltr (Jar)"
                        ]
                    },
                    {
                        "id": "4",
                        "name": "Himalyan Pink Salt",
                        "description": "Himalyan Pink Salt Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "1Kg (Pouch)"
                        ]
                    },
                    {
                        "id": "5",
                        "name": "Desi Detox (Kalijeeri + Ajwain + Methi  with roasting)",
                        "description": "Desi Detox (Kalijeeri + Ajwain + Methi  with roasting) Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "150g (Jar)"
                        ]
                    },
                    {
                        "id": "6",
                        "name": "Desi Protien (Roasted Cheak Pea + Pumpkin + Sunflower + Watermelon + traditional masala)",
                        "description": "Desi Protien (Roasted Cheak Pea + Pumpkin + Sunflower + Watermelon + traditional masala) Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "150g (Jar)"
                        ]
                    },
                    {
                        "id": "7",
                        "name": "Gravy Mix Protein (Roasted Cheak Pea + Pumpkin + Sunflower + Watermelon + traditional hot masala)",
                        "description": "Gravy Mix Protein (Roasted Cheak Pea + Pumpkin + Sunflower + Watermelon + traditional hot masala) Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "150g (Jar)"
                        ]
                    }
                ]
            },
            {
                "id": "3",
                "name": "Health And Wellness Juices",
                "description": "Health And Wellness Juices Description Very well product",
                "image": "https://picsum.photos/900",
                "products": [
                    {
                        "id": "1",
                        "name": "Aelovera Juice",
                        "description": "Desi Detox (Kalijeeri + Ajwain + Methi  with roasting) Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "500ml (bottle)"
                        ]
                    },
                    {
                        "id": "2",
                        "name": "Aamla Juice",
                        "description": "Aamla Juice Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "1 Ltr (Bottle)"
                        ]
                    },
                    {
                        "id": "3",
                        "name": "Jambun Juice",
                        "description": "Jambun Juice Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "4",
                        "name": "Noni Juice",
                        "description": "Noni Juice Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    }
                ]
            },
            {
                "id": "4",
                "name": "Organic/ Cold Press Oil",
                "description": "Organic/ Cold Press Oil Description Very well product",
                "image": "https://picsum.photos/900",
                "products": [
                    {
                        "id": "1",
                        "name": "Cold Pressed Groundnut Oil",
                        "description": "Cold Pressed Groundnut Oil (Kalijeeri + Ajwain + Methi  with roasting) Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "500ml (bottle)"
                        ]
                    },
                    {
                        "id": "2",
                        "name": "Cold Pressed Coconut Oil",
                        "description": "Cold Pressed Coconut Oil Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "1 Ltr (Bottle)"
                        ]
                    },
                    {
                        "id": "3",
                        "name": "Cold Pressed Sesame Oil",
                        "description": "Cold Pressed Sesame Oil Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "5ltr (Jar)"
                        ]
                    },
                    {
                        "id": "4",
                        "name": "Cold Pressed Sunflower Oil",
                        "description": "Cold Pressed Sunflower Oil Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "15ltr (Jar)"
                        ]
                    },
                    {
                        "id": "5",
                        "name": "Cold Pressed Musterd Oil",
                        "description": "Cold Pressed Musterd Oil Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "6",
                        "name": "Cold Pressed Castor Oil",
                        "description": "Cold Pressed Castor Oil (Kalijeeri + Ajwain + Methi  with roasting) Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "50ml (bottle)"
                        ]
                    },
                    {
                        "id": "7",
                        "name": "Cold Pressed Flaxseed Oil",
                        "description": "Cold Pressed Flaxseed Oil Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "100ml (Bottle)"
                        ]
                    },
                    {
                        "id": "8",
                        "name": "Cold Pressed Neem Oil",
                        "description": "Cold Pressed Neem Oil Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "500ml (Bottle)"
                        ]
                    },
                    {
                        "id": "9",
                        "name": "Cold Pressed Karanja Oil",
                        "description": "Cold Pressed Karanja Oil Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "10",
                        "name": "Cold Pressed Kalonji Oil",
                        "description": "Cold Pressed Kalonji Oil Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    }
                ]
            },
            {
                "id": "5",
                "name": "Super Seed",
                "description": "Super Seed Description Very well product",
                "image": "https://picsum.photos/900",
                "products": [
                    {
                        "id": "1",
                        "name": "Pumpkin Seeds ",
                        "description": "Super Pumpkin Seeds Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "150g (Bottle & Pouch)"
                        ]
                    },
                    {
                        "id": "2",
                        "name": "Sunflower Seeds ",
                        "description": "Super Sunflower Seeds Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "500g (Pouch)"
                        ]
                    },
                    {
                        "id": "3",
                        "name": "Watermelon Seeds ",
                        "description": "Super Watermelon Seeds Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "4",
                        "name": "Flax Seeds ",
                        "description": "Flax Seeds  Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "5",
                        "name": "Chia Seed",
                        "description": "Chia Seed Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "6",
                        "name": "Quinoa Seeds ",
                        "description": "Quinoa Seeds  Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "7",
                        "name": "Alfalfa Seed",
                        "description": "Alfalfa Seed Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "8",
                        "name": "Kalonji Seeds",
                        "description": "Kalonji Seeds Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "9",
                        "name": "Sabja Seeds",
                        "description": "Sabja Seeds Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "10",
                        "name": "Halim Seeds",
                        "description": "Halim Seeds Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "11",
                        "name": "Amaranth Seeds",
                        "description": "Super Amaranth Seeds Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    }
                ]
            },
            {
                "id": "6",
                "name": "Green and Helbal Tea",
                "description": "Green and Helbal Tea Description Very well product",
                "image": "https://picsum.photos/900",
                "products": [
                    {
                        "id": "1",
                        "name": "Chemomile Tea",
                        "description": "Chemomile Tea Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "30g (Jar)",
                            "60g (Jar)"
                        ]
                    },
                    {
                        "id": "2",
                        "name": "Green Tea",
                        "description": "Green Tea Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "90g (Jar)"
                        ]
                    }
                ]
            },
            {
                "id": "7",
                "name": "Ayurvedic Powder",
                "description": "Ayurvedic Powder Description Very well product",
                "image": "https://picsum.photos/900",
                "products": [
                    {
                        "id": "1",
                        "name": "Amla Powder",
                        "description": "Amla Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "150g (Jar)"
                        ]
                    },
                    {
                        "id": "2",
                        "name": "Ashwagandha Powder",
                        "description": "Ashwagandha Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "200g (Pouch)"
                        ]
                    },
                    {
                        "id": "3",
                        "name": "Tulsi Powder",
                        "description": "Tulsi Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "250g (Pouch)"
                        ]
                    },
                    {
                        "id": "4",
                        "name": "Neem Leaves",
                        "description": "Neem Leaves Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "5",
                        "name": "Hibiscus Powder",
                        "description": "Hibiscus Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "6",
                        "name": "Rose petal Powder",
                        "description": "Rose petal Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "7",
                        "name": "Triphla Powder",
                        "description": "Triphla Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "8",
                        "name": "Lemongrass Powder",
                        "description": "Lemongrass Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "9",
                        "name": "Giloy Powder",
                        "description": "Giloy Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "10",
                        "name": "Bramhi Powder",
                        "description": "Bramhi Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "11",
                        "name": "Ginger Powder",
                        "description": "Ginger Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "12",
                        "name": "Gokhru Powder",
                        "description": "Gokhru Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "13",
                        "name": "Senna Leaves Powder",
                        "description": "Senna Leaves Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "14",
                        "name": "Manjistha Powder",
                        "description": "Manjistha Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "15",
                        "name": "Piprimul Powder",
                        "description": "Piprimul Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "16",
                        "name": "Cinnamon Powder",
                        "description": "Cinnamon Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "17",
                        "name": "Mulethi / Yasthimadhu",
                        "description": "Mulethi / Yasthimadhu Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "18",
                        "name": "Satavari Powder",
                        "description": "Satavari Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "19",
                        "name": "Aritha Powder",
                        "description": "Aritha Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "20",
                        "name": "Sikakai Powder",
                        "description": "Sikakai Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "21",
                        "name": "Indigo Powder",
                        "description": "Indigo Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "22",
                        "name": "Indrajav Powder",
                        "description": "Indrajav Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "23",
                        "name": "Piprimul /Ganthoda Powder",
                        "description": "Chemomile Piprimul /Ganthoda Powder Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "24",
                        "name": "Jmbun Powder",
                        "description": "Jmbun Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "25",
                        "name": "Bhumi Amla Powder",
                        "description": "Bhumi Amla Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "26",
                        "name": "Henna Powder",
                        "description": "Henna Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "27",
                        "name": "Orange Peel Powder",
                        "description": "Orange Peel Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "28",
                        "name": "Lemon Peel Powder",
                        "description": "Lemon Peel Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "29",
                        "name": "Kouch Beej Powder",
                        "description": "Kouch Beej Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "30",
                        "name": "Dudhi Powder",
                        "description": "Dudhi Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "31",
                        "name": "Bringraj Powder",
                        "description": "Bringraj Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "32",
                        "name": "Arjun Powder",
                        "description": "Arjun Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "33",
                        "name": "Ashok Powder",
                        "description": "Ashok Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "34",
                        "name": "Harde-Haritaki Powder",
                        "description": "Harde-Haritaki Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "35",
                        "name": "Chlorella Powder",
                        "description": "Chlorella Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "36",
                        "name": "Gauva Leaf Powder",
                        "description": "Gauva Leaf Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "37",
                        "name": "Karela Powder",
                        "description": "Karela Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "38",
                        "name": "Methi Powder",
                        "description": "Methi Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "39",
                        "name": "Curry Leaf Powder",
                        "description": "Curry Leaf Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "40",
                        "name": "Collegen Powder",
                        "description": "Collegen Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "41",
                        "name": "Milk Thisle Seeds",
                        "description": "Milk Thisle Seeds Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "42",
                        "name": "Banasfa Patti Powder",
                        "description": "Banasfa Patti Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "43",
                        "name": "Lotus Flower Powder",
                        "description": "Lotus Flower Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "44",
                        "name": "Garcinia Combogia ",
                        "description": "Garcinia Combogia  Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "45",
                        "name": "Mint Powder",
                        "description": "Mint Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "46",
                        "name": "Spinach Powder",
                        "description": "Spinach Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    }
                ]
            },
            {
                "id": "8",
                "name": "Millets",
                "description": "Millets Description Very well product",
                "image": "https://picsum.photos/900",
                "products": [
                    {
                        "id": "1",
                        "name": "Proso Millet (Chena / Barri)",
                        "description": "Proso Millet (Chena / Barri) Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "500g (Pouch)"
                        ]
                    },
                    {
                        "id": "2",
                        "name": "Foxtail Millet (Kakum / Kangni)",
                        "description": "Foxtail Millet (Kakum / Kangni) Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "1Kg (Pouch)"
                        ]
                    },
                    {
                        "id": "3",
                        "name": "Barnyard Millet (Sanwa)",
                        "description": "Barnyard Millet (Sanwa) Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "5Kg (Pouch)"
                        ]
                    },
                    {
                        "id": "4",
                        "name": "Little Millet (Moraiyo)",
                        "description": "Little Millet (Moraiyo) Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "5",
                        "name": "Quinoa",
                        "description": "Quinoa Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "6",
                        "name": "Kodo Millet",
                        "description": "Kodo Millet Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    }
                ]
            },
            {
                "id": "9",
                "name": "Spices and herbs",
                "description": "Spices and herbs Description Very well product",
                "image": "https://picsum.photos/900",
                "products": [
                    {
                        "id": "1",
                        "name": "Hing",
                        "description": "Hing Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "50g"
                        ]
                    },
                    {
                        "id": "2",
                        "name": "Premium Hing",
                        "description": "Premium Hing Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "100g"
                        ]
                    },
                    {
                        "id": "3",
                        "name": "Lakadong Turmeric",
                        "description": "Lakadong Turmeric Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "250g (Pouch)"
                        ]
                    }
                ]
            },
            {
                "id": "10",
                "name": "Agricultural Inputs",
                "description": "Agricultural Inputs Description Very well product",
                "image": "https://picsum.photos/900",
                "products": [
                    {
                        "id": "1",
                        "name": "Seaweed Gel",
                        "description": "Seaweed Gel Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "1Kg"
                        ]
                    },
                    {
                        "id": "2",
                        "name": "Seaweed Powder",
                        "description": "Seaweed Powder Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "5Kg"
                        ]
                    },
                    {
                        "id": "3",
                        "name": "Humiq Liq",
                        "description": "Humiq Liq Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": [
                            "15Kg"
                        ]
                    },
                    {
                        "id": "4",
                        "name": "Soil Heal",
                        "description": "Soil Heal Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "5",
                        "name": "Cold Pressed Neem Oil",
                        "description": "Cold Pressed Neem Oil Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "6",
                        "name": "Cold Pressed Karanja Oil",
                        "description": "Cold Pressed Karanja Oil Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    },
                    {
                        "id": "7",
                        "name": "Edta Micro Nutrient ",
                        "description": "Edta Micro Nutrient  Description Very well product",
                        "image": "https://picsum.photos/400",
                        "variants": []
                    }
                ]
            }
        ];

        const categories = categoriesData;

        console.log("🚀 ~ fetchAndDisplayProducts ~ categories:", categories)
        
        const productCategoriesContainer = document.getElementById('product-categories');
        const searchInput = document.getElementById('search-input');
        const searchButton = document.getElementById('search-button');

        createCategoryNav(categories);

        function createCategoryNav(categories) {
            const categoryNav = document.getElementById('category-nav');
            const ul = document.createElement('ul');
        
            categories.forEach(category => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = '#';
                a.textContent = category.name;
                a.dataset.categoryId = category.id;
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    highlightSelectedCategory(a);
                    loadProductsForCategory(category.id);
                });
                li.appendChild(a);
                ul.appendChild(li);
            });
        
            categoryNav.appendChild(ul);
        
            // Highlight the first category by default
            if (categories.length > 0) {
                const firstCategoryLink = ul.querySelector('a');
                highlightSelectedCategory(firstCategoryLink);
                loadProductsForCategory(categories[0].id);
            }
        }
        
        function highlightSelectedCategory(selectedLink) {
            const allLinks = document.querySelectorAll('#category-nav a');
            allLinks.forEach(link => link.classList.remove('active'));
            selectedLink.classList.add('active');
        }
        
        function loadProductsForCategory(categoryId) {
            const category = categories.find(cat => cat.id === categoryId);
            if (category) {
                renderProducts([category]);
            }
        }

        // Function to render products
        function renderProducts(filteredCategories) {
            productCategoriesContainer.innerHTML = '';
            filteredCategories.forEach(category => {
                const categoryHTML = `
                    <div id="category-${category.id}" class="row mb-5">
                        <div class="col-12">
                            <h2 class="mb-4">${category.name}</h2>
                        </div>
                        <div class="full-width-image-container">
                            <img src="${category.image}" class="img-fluid" alt="${category.name}">
                        </div>
                        <div class="col-12">
                            <hr class="my-4"/>
                        </div>
                        ${category.products.map(product => `
                            <div class="col-lg-4 col-md-6 col-12 mb-4">
                                <div class="product-thumb">
                                    <a href="product-detail.html" class="product-link" data-product='${JSON.stringify(product)}'>
                                        <img src="${product.image}" class="img-fluid product-image" alt="${product.name}">
                                    </a>
                                    <div class="product-top d-flex">
                                        <a href="#" class="bi-heart-fill product-icon ms-auto"></a>
                                    </div>
                                    <div class="product-info d-flex">
                                        <div>
                                            <h5 class="product-title mb-0">
                                                <a href="product-detail.html" class="product-link product-title-link" data-product='${JSON.stringify(product)}'>${product.name}</a>
                                            </h5>
                                            <p class="product-p">${product.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
                productCategoriesContainer.innerHTML += categoryHTML;
            });

            // Add event listeners to product links
            const productLinks = document.querySelectorAll('.product-link');
            productLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const productData = JSON.parse(this.getAttribute('data-product'));
                    localStorage.setItem('selectedProduct', JSON.stringify(productData));
                    window.location.href = 'product-detail.html';
                });
            });
        }

        // Add search functionality
        function performSearch() {
            const searchTerm = searchInput.value.toLowerCase().trim();
            if (searchTerm === '') {
                const defaultCategory = categories[0];
                renderProducts([defaultCategory]);
                updateCategoryNavHighlight(defaultCategory);
                return;
            }

            const filteredCategories = categories.map(category => ({
                ...category,
                products: category.products.filter(product => 
                    product.name.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm) ||
                    (product.variants && product.variants.some(variant => variant.toLowerCase().includes(searchTerm)))
                )
            })).filter(category => category.products.length > 0);

            if (filteredCategories.length > 0) {
                renderProducts(filteredCategories);
            } else {
                productCategoriesContainer.innerHTML = `
                    <div class="no-results-container">
                        <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="No results found" class="no-results-image">
                        <p class="no-results-text text-center">No products found matching your search.</p>
                    </div>
                `;
            }

            updateCategoryNavHighlight(filteredCategories);
        }

        function updateCategoryNavHighlight(filteredCategories) {
            const allCategoryLinks = document.querySelectorAll('#category-nav a');
            allCategoryLinks.forEach(link => {
                const categoryId = link.dataset.categoryId;
                if (filteredCategories.some(cat => cat.id === categoryId)) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }

        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });

        

    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayProducts);
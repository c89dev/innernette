import { defineStore } from "pinia";

type MallCategoryId = "shoes" | "shirts" | "coats" | "pants" | "hats";

type ProductOption = {
    id: string;
    label: string;
    values?: string[];
    defaultValue: string;
    layers?: Record<string, string>;
};
type MallCategory = {
    id: MallCategoryId;
    label: string;
    baseImage?: string;
    description?: string[];
    price?: string[];
    options?: ProductOption[];
};
type SelectedOptions = Partial<Record<MallCategoryId, Record<string, string>>>;

export const useMallStore = defineStore("mall", {
    state: () => ({
        currentCat: "shoes" as MallCategoryId,
        categories: [
            {
                id: "shoes",
                label: "THE SHOE STORE",
                baseImage: "/src/assets/raster/shoes/crocs_blue.png",
                description: [
                    "Choose from our wide selection of business shoes,",
                    "suit shoes, sandals and sneakers. Top quality",
                    "american made shoes are 100% cotton and are wrinkle",
                    "free. for ultimate comfort please wash shoes once",
                    "before wearing. Shoes available in various sizes and",
                    "colors. Browse through and discover what you",
                    "have been missing.",
                ],
                options: [
                    {
                        id: "size",
                        label: "Size",
                        values: ["S", "M"],
                        defaultValue: "S",
                    },
                    {
                        id: "qnty",
                        label: "Qnty",
                        values: ["1", "2", "3", "4", "20"],
                        defaultValue: "1",
                    },
                    {
                        id: "color",
                        label: "Color",
                        values: ["Blue", "Brown", "Green"],
                        defaultValue: "Blue",
                        layers: {
                            Brown: "/src/assets/raster/shoes/crocs_brown.png",
                            Green: "/src/assets/raster/shoes/crocs_green.png",
                        },
                    },
                ],
            },
            {
                id: "shirts",
                label: "THE SHIRT STORE",
                baseImage: "/src/assets/raster/shirts/shirt.png",
                description: [
                    "Choose from our wide selection of business shirts,",
                    "suit shirts, blouses, silk shirts and sweatshirts. Top quality",
                    "american made shirts are 100% cotton and are wrinkle",
                    "free. for ultimate comfort please wash pants once",
                    "before wearing. Shirts available in various sizes and",
                    "colors. Browse through and discover what you",
                    "have been missing.",
                ],
                price: [
                    "CORPORATE LOUNGE SHIRT",
                    "Available in Large and Small",
                    "$10.00 plus shipping and handling",
                ],
                options: [
                    {
                        id: "size",
                        label: "Size",
                        values: ["S", "M"],
                        defaultValue: "S",
                    },
                    {
                        id: "qnty",
                        label: "Qnty",
                        values: ["1", "2", "3", "4", "20"],
                        defaultValue: "1",
                    },
                    {
                        id: "color",
                        label: "Color",
                        values: ["Multi"],
                        defaultValue: "Multi",
                    },
                ],
            },
            {
                id: "coats",
                label: "THE COAT STORE",
                baseImage: "src/assets/raster/coats/coat.png",
                description: [
                    "Do you have a job interview in the near future? How",
                    "about a wedding, a banquet or a beautiful? Check",
                    "out our rich selection of fine business suits. Choose",
                    "from a wide variety of colors, cuts and styles.",
                    "These quality made American tailored suits will",
                    "make you look official and sharp like you've",
                    "never been before.",
                ],
                options: [
                    {
                        id: "size",
                        label: "Size",
                        values: ["L", "XL", "2XL"],
                        defaultValue: "L",
                    },
                    {
                        id: "qnty",
                        label: "Qnty",
                        values: ["1", "2", "3", "4", "20"],
                        defaultValue: "1",
                    },
                    {
                        id: "color",
                        label: "Color",
                        values: ["Black"],
                        defaultValue: "Black",
                    },
                ],
            },
            {
                id: "pants",
                label: "THE PANTS STORE",
                baseImage: "/src/assets/raster/pants/pants.png",
                description: [
                    "Choose from our wide selection of business slacks,",
                    "suit pants, jeans, shorts and sweatpants.",
                    "Top quality american made pants are 100% cotton and are winkle ",
                    "free. For ultimate comfort please wash pants once",
                    "before wearing Pants available in various sizes and",
                    "colors. Browse through and discover what you",
                    "have been missing",
                ],
                price: [
                    "STANDARD BLUE JEANS",
                    "Available in Large and Small",
                    "$34.99 plus shipping and handling",
                ],
                options: [
                    {
                        id: "color",
                        label: "Color",
                        values: ["Blue", "Yellow"],
                        defaultValue: "Blue",
                        layers: {
                            Yellow: "/src/assets/raster/pants/yellow_alt.png",
                        },
                    },
                    {
                        id: "pleats",
                        label: "Pleats",
                        values: ["Yes", "No"],
                        defaultValue: "No",
                    },
                    {
                        id: "parachute",
                        label: "Parachute",
                        values: ["Yes", "No"],
                        defaultValue: "No",
                        layers: {
                            Yes: "/src/assets/raster/pants/para.png",
                        },
                    },
                    {
                        id: "cuffs",
                        label: "Cuffs",
                        values: ["Yes", "No"],
                        defaultValue: "No",
                        layers: {
                            Yes: "/src/assets/raster/pants/cuffs.png",
                        },
                    },
                    {
                        id: "size",
                        label: "Size",
                        values: ["L", "XL", "2XL", "3XL", "4XL"],
                        defaultValue: "L",
                    },
                ],
            },
            {
                id: "hats",
                label: "THE HAT STORE",
                baseImage: "/src/assets/raster/hats/hats.png",
                description: [
                    "Choose from our wide selection of business hats,",
                    "suit hats, caps, beanies and sweathats. Top quality",
                    "american made hats are 100% cotton and are wrinkle",
                    "free. for ultimate comfort please wash pants once",
                    "before wearing. Hats available in various sizes and",
                    "colors. Browse through and discover what you",
                    "have been missing.",
                ],
                price: [
                    "STANDARD HATS",
                    "Available in Large and Small",
                    "$34.99 plus shipping and handling",
                ],
                options: [
                    {
                        id: "size",
                        label: "Size",
                        values: ["S", "M"],
                        defaultValue: "S",
                    },
                    {
                        id: "qnty",
                        label: "Qnty",
                        values: ["1", "2", "3", "4", "20"],
                        defaultValue: "1",
                    },
                    {
                        id: "color",
                        label: "Color",
                        values: ["Multi"],
                        defaultValue: "Multi",
                    },
                ],
            },
        ] as MallCategory[],
        selectedOptions: {
            shoes: {
                size: "",
                qnty: "",
                color: "",
            },
            shirts: {
                size: "",
                qnty: "",
                color: "",
            },
            coats: {
                size: "",
                qnty: "",
                color: "",
            },
            pants: {
                color: "",
                pleats: "",
                parachute: "",
                cuffs: "",
                size: "",
            },
            hats: {
                size: "",
                qnty: "",
                color: "",
            },
        } as SelectedOptions,
    }),
    getters: {
        getCurrentCat(state) {
            return state.categories.find((cat) => cat.id === state.currentCat);
        },
        getActiveLayers(): string[] {
            const category = this.getCurrentCat;
            const selected = this.selectedOptions[this.currentCat];

            if (!category?.options || !selected) return [];

            const activeLayers: string[] = [];

            for (const option of category.options) {
                const selectedValue = selected[option.id];

                if (!selectedValue) continue;

                const layer = option.layers?.[selectedValue];

                if (layer) {
                    activeLayers.push(layer);
                }
            }

            return activeLayers;
        },
    },
    actions: {
        setCurrentCat(cat: MallCategoryId) {
            this.currentCat = cat;
            console.log("Changed category to ", this.currentCat);
        },
        setOption(optionId: string, value: string) {
            const selected = this.selectedOptions[this.currentCat];

            if (!selected) return;

            selected[optionId] = value;
        },
    },
});

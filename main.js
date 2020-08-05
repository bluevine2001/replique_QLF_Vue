Vue.component("fiche-produit", {
  // création du component 'fiche-produit'
  template: `<div class="col-3">
                <img v-bind:src="image" width="380px">             
            </div>`,
  props: ["image"], //propriétées du component
  methods: {},
});

var app = new Vue({
  el: "#app", // el = element
  data: function () {
    return {
      shopListIsActive: false,
      produits: [
        {
          id: "1",
          nom: "",
          hover: false,
          image: "img/coupe-vent-home-menthe.jpg",
          image2: "img/technique_mente2.jpg",
          prix: "110.00€",
        },
        {
          id: "2",
          nom: "",
          hover: false,
          image: "img/Bas_de_jogging_technique_menthe1.jpg",
          image2: "img/Bas_de_jogging_technique_menthe2.jpg",
          prix: "80.00€",
        },
        {
          id: "3",
          nom: "",
          hover: false,
          image: "img/coupe-vent-home-noir.jpg",
          image2: "img/coupe-vent-home-noir2.jpg",
          prix: "110.00€",
        },
        {
          id: "4",
          nom: "",
          hover: false,
          image: "img/bas_technique_noir.jpg",
          image2: "img/bas_technique_noir2.jpg",
          prix: "80.00€",
        },
      ],
      produits2: [
        {
          id: "5",
          nom: "",
          image: "img/survet_blanc.jpg",
          image2: "img/survet_blanc2.jpg",
          prix: "150.00€",
        },
        {
          id: "6",
          nom: "",
          image: "img/survet_noir.jpg",
          image2: "img/survet_noir2.jpg",
          prix: "150.00€",
        },
        {
          id: "7",
          nom: "",
          image: "img/sweat_capuche_patch_blanc.jpg",
          image2: "img/sweat_capuche_patch_blanc2.jpg",
          prix: "90.00€",
        },
        {
          id: "8",
          nom: "",
          image: "img/sweat_capuche_patch_noir.jpg",
          image2: "img/sweat_capuche_patch_noir2.jpg",
          prix: "90.00€",
        },
      ],

      produits3: [
        {
          id: "9",
          nom: "",
          image: "img/haut_jogging_noir.jpg",
          image2: "img/haut_jogging_noir2.jpg",
          prix: "85.00€",
        },
        {
          id: "10",
          nom: "",
          image: "img/bas_jogging_noir.jpg",
          image2: "img/bas_jogging_noir2.jpg",
          prix: "65.00€",
        },
        {
          id: "11",
          nom: "",
          image: "img/haut_jogging_blanc.jpg",
          image2: "img/haut_jogging_blanc2.jpg",
          prix: "85.00€",
        },
        {
          id: "12",
          nom: "",
          image: "img/bas_jogging_blanc.jpg",
          image2: "img/bas_jogging_blanc2.jpg",
          prix: "65.00€",
        },
      ],
      produits4: [
        {
          id: "13",
          nom: "",
          image: "img/tshirt_patch_blanc.jpg",
          image2: "img/tshirt_patch_blanc2.jpg",
          prix: "45.00€",
        },
        {
          id: "14",
          nom: "",
          image: "img/tshirt_patch_noir.jpg",
          image2: "img/tshirt_patch_noir2.jpg",
          prix: "45.00€",
        },
        {
          id: "15",
          nom: "",
          image: "img/tshirt_patch_rouge.jpg",
          image2: "img/tshirt_patch_rouge2.jpg",
          prix: "45.00€",
        },
        {
          id: "16",
          nom: "",
          image: "img/Bob_menthe.jpg",
          image2: "img/Bob_menthe2.jpg",
          prix: "50.00€",
        },
      ],
      produits5: [
        {
          id: "17",
          nom: "",
          image: "img/Bob_noir.jpg",
          image2: "img/Bob_noir2.jpg",
          prix: "50.00€",
        },
        {
          id: "18",
          nom: "",
          image: "img/short_blanc.jpg",
          image2: "img/short_blanc2.jpg",
          prix: "45.00€",
        },
        {
          id: "19",
          nom: "",
          image: "img/short_noir.jpg",
          image2: "img/short_noir2.jpg",
          prix: "45.00€",
        },
        {
          id: "20",
          nom: "",
          image: "img/short_menthe.jpg",
          image2: "img/short_menthe2.jpg",
          prix: "45.00€",
        },
      ],
      produits6: [
        {
          id: "21",
          nom: "",
          image: "img/tshirt_3d_blanc.jpg",
          image2: "img/tshirt_3d_blanc2.jpg",
          prix: "60.00€",
        },
        {
          id: "22",
          nom: "",
          image: "img/tshirt_3d_noir.jpg",
          image2: "img/tshirt_3d_noir2.jpg",
          prix: "60.00€",
        },
        {
          id: "23",
          nom: "",
          image: "img/tshirt_3d_menthe.jpg",
          image2: "img/tshirt_3d_menthe2.jpg",
          prix: "60.00€",
        },
        {
          id: "24",
          nom: "",
          image: "img/casquette_rouge.jpg",
          image2: "img/casquette_rouge2.jpg",
          prix: "45.00€",
        },
      ],
      produits7: [
        {
          id: "25",
          nom: "",
          image: "img/casquette_noir.jpg",
          image2: "img/casquette_noir2.jpg",
          prix: "45.00€",
        },
        {
          id: "26",
          nom: "",
          image: "img/crewneck_menthe.jpg",
          image2: "img/crewneck_menthe2.jpg",
          prix: "100.00€",
        },
        {
          id: "27",
          nom: "",
          image: "img/crewneck_noir.jpg",
          image2: "img/crewneck_noir2.jpg",
          prix: "100.00€",
        },
        {
          id: "28",
          nom: "",
          image: "img/crewneck_rouge.jpg",
          image2: "img/crewneck_rouge2.jpg",
          prix: "100.00€",
        },
      ],
      produits8: [
        {
          id: "29",
          nom: "",
          image: "img/PORTE_CLEFS_SHOT_08_400x.jpg",
          image2: "img/PORTE_CLEFS2.jpg",
          prix: "15.00€",
        },
        {
          id: "30",
          nom: "",
          image: "img/mockup-iphone11-noir_400x.jpg",
          image2: "img/mockup-iphone11-noir-1_1080x2.jpg",
          prix: "35.00€",
        },
        {
          id: "31",
          nom: "",
          image: "img/mockup-iphone11-rouge_400x.jpg",
          image2: "img/mockup-iphone11-rouge-1_1080x2.jpg",
          prix: "35.00€",
        },
      ],
    };
  },

  methods: {
    toggleShopList() {
      this.shopListIsActive = !this.shopListIsActive;
    },
    log() {
      console.log("hover");
      this.hover = !this.hover;
    },
  },
  props: ["image"],
});

Vue.component("shop-list", {
  // création du component 'fiche-produit'
  template: `<div>
        <div class="shop-list">
           <div class="row shop-header">
               <h3 class="col-11">Panier</h3>
               <a class="col-1" href="#" @click="toggle">X</a>
           </div>
           <div class="shop-content">
            <p>votre panier est vide.</p>
           </div>
        </div>
</div>`,
  methods: {
    toggle() {
      console.log("sa marche !");
      this.$emit("toggle");
    },
  },
});

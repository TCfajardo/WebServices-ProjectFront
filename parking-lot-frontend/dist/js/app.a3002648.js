(function(){"use strict";var e={6013:function(e,t,o){var r=o(8355),a=o(5130),s=o(144),i=o(6768),l=o(4232);const n={id:"app"},c=(0,i.Lk)("h1",null,"Parqueadero NN",-1),u=(0,i.Lk)("img",{src:"https://img.freepik.com/vector-premium/diseno-plantilla-logotipo-coche-estacionamiento_20029-1033.jpg",alt:"Carro",class:"car-image"},null,-1),h={class:"main-content"},d={key:0,class:"form-container"},v=(0,i.Fv)('<div class="footer-content"><h3>Contacto</h3><p>Dirección: Av. Principal #123, Ciudad, País</p><p>Teléfono: +123 456 789</p><p>Correo electrónico: info@parqueadero.com</p><div class="social-links"><a href="#">Facebook</a><a href="#">Twitter</a><a href="#">Instagram</a></div><p>© 2024 Parqueadero NN. Todos los derechos reservados.</p></div>',1),m=[v];function p(e,t,o,r,a,s){const v=(0,i.g2)("vehicle-registration-form"),p=(0,i.g2)("vehicle-retrieval-form"),g=(0,i.g2)("vehicle-table");return(0,i.uX)(),(0,i.CE)("div",n,[c,u,(0,i.Lk)("nav",null,[(0,i.Lk)("button",{onClick:t[0]||(t[0]=e=>{a.showRegistrationForm=!0,a.showRetrievalForm=!1,a.showTableForm=!1})},"Registrar vehículo"),(0,i.Lk)("button",{onClick:t[1]||(t[1]=e=>{a.showRetrievalForm=!0,a.showRegistrationForm=!1,a.showTableForm=!1})},"Retirar vehículo"),(0,i.Lk)("button",{onClick:t[2]||(t[2]=e=>{a.showTableForm=!0,a.showRegistrationForm=!1,a.showRetrievalForm=!1})},"Obtener vehículos")]),(0,i.Lk)("div",h,[a.showRegistrationForm||a.showRetrievalForm||a.showTableForm?((0,i.uX)(),(0,i.CE)("div",d,[a.showRegistrationForm?((0,i.uX)(),(0,i.Wv)(v,{key:0,onClose:t[3]||(t[3]=e=>a.showRegistrationForm=!1)})):(0,i.Q3)("",!0),a.showRetrievalForm?((0,i.uX)(),(0,i.Wv)(p,{key:1,onClose:t[4]||(t[4]=e=>a.showRetrievalForm=!1)})):(0,i.Q3)("",!0),a.showTableForm?((0,i.uX)(),(0,i.Wv)(g,{key:2})):(0,i.Q3)("",!0)])):(0,i.Q3)("",!0)]),(0,i.Lk)("footer",{class:"footer",style:(0,l.Tr)({marginTop:s.showFooterMargin?"8px":"0"})},m,4)])}const g=e=>((0,i.Qi)("data-v-682d2ff8"),e=e(),(0,i.jt)(),e),f={class:"form-container slide-down",style:{padding:"20px"}},b=g((()=>(0,i.Lk)("h2",null,"Registrar Vehículo",-1))),k={class:"form-group"},y=g((()=>(0,i.Lk)("label",{for:"license_plate",class:"label"},"Placa:",-1))),L={class:"form-group"},_=g((()=>(0,i.Lk)("label",{for:"color",class:"label"},"Color:",-1))),w=["value"],P={class:"form-group"},E=g((()=>(0,i.Lk)("label",{for:"carPhoto",class:"label"},"Foto del vehículo:",-1))),C=g((()=>(0,i.Lk)("div",{style:{"text-align":"center","margin-top":"20px"}},[(0,i.Lk)("button",{type:"submit",class:"button"},"Registrar")],-1))),F={key:0,class:"error"},R={key:1,class:"success"};function M(e,t,o,r,s,n){return(0,i.uX)(),(0,i.CE)("div",f,[b,(0,i.Lk)("form",{onSubmit:t[4]||(t[4]=(0,a.D$)(((...e)=>n.submitForm&&n.submitForm(...e)),["prevent"])),style:{margin:"0px"}},[(0,i.Lk)("div",k,[y,(0,i.bo)((0,i.Lk)("input",{type:"text",id:"license_plate","onUpdate:modelValue":t[0]||(t[0]=e=>s.vehicle.license_plate=e),required:"",onInput:t[1]||(t[1]=(...e)=>n.validateLicensePlate&&n.validateLicensePlate(...e)),class:"input",maxlength:"7"},null,544),[[a.Jo,s.vehicle.license_plate]])]),(0,i.Lk)("div",L,[_,(0,i.bo)((0,i.Lk)("select",{id:"color","onUpdate:modelValue":t[2]||(t[2]=e=>s.vehicle.color=e),required:"",class:"input"},[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.colors,(e=>((0,i.uX)(),(0,i.CE)("option",{key:e.id,value:e.name},(0,l.v_)(e.name),9,w)))),128))],512),[[a.u1,s.vehicle.color]])]),(0,i.Lk)("div",P,[E,(0,i.Lk)("input",{type:"file",id:"carPhoto",onChange:t[3]||(t[3]=(...e)=>n.validateCarPhoto&&n.validateCarPhoto(...e)),ref:"carPhoto",name:"image_path",required:"",class:"input"},null,544)]),C,s.errorMessage?((0,i.uX)(),(0,i.CE)("label",F,(0,l.v_)(s.errorMessage),1)):(0,i.Q3)("",!0),s.successMessage?((0,i.uX)(),(0,i.CE)("label",R,(0,l.v_)(s.successMessage),1)):(0,i.Q3)("",!0)],32)])}var x={data(){return{vehicle:{license_plate:"",color:"",state:"ACTIVO"},errorMessage:"",successMessage:"",colors:[{id:1,name:"Rojo"},{id:2,name:"Azul"},{id:3,name:"Verde"},{id:4,name:"Amarillo"},{id:5,name:"Negro"},{id:6,name:"Blanco"},{id:7,name:"Gris"},{id:8,name:"Plateado"},{id:9,name:"Dorado"},{id:10,name:"Plateado"},{id:11,name:"Café"},{id:12,name:"Naranja"},{id:13,name:"Morado"},{id:16,name:"Beige"},{id:17,name:"Celeste"},{id:18,name:"Marrón"}]}},methods:{validateLicensePlate(){this.vehicle.license_plate=this.vehicle.license_plate.toUpperCase();const e=/^[A-Z]{3}-[0-9]{3}$/;e.test(this.vehicle.license_plate)?this.errorMessage="":(this.errorMessage="El formato de la placa es incorrecto. Debe ser ABC-123.",this.successMessage="")},validateCarPhoto(e){const t=e.target.files[0],o=/(\.jpg|\.jpeg|\.png|\.gif)$/i;o.exec(t.name)?(this.errorMessage="",this.vehicle.image_path=t):(this.errorMessage="El archivo seleccionado no es una imagen válida. Por favor, selecciona un archivo de imagen.",this.successMessage="",e.target.value="")},async submitForm(){if(!this.vehicle.license_plate||!this.vehicle.color||!this.$refs.carPhoto.files[0])return this.errorMessage="Todos los datos del vehículo son obligatorios",void(this.successMessage="");const e=new FormData;e.append("license_plate",this.vehicle.license_plate),e.append("color",this.vehicle.color),e.append("image_path",this.$refs.carPhoto.files[0]);try{const t=await this.$axios.post("/cars",e);console.log("Respuesta del servidor:",t.data),this.successMessage="El vehículo se registró correctamente",this.errorMessage=""}catch(t){console.error("Error al enviar los datos del vehículo:",t),t.response.status,this.errorMessage="Hubo un error al registrar el vehículo, no fue posible enviar los datos al servidor.",this.successMessage=""}}}},T=o(1241);const O=(0,T.A)(x,[["render",M],["__scopeId","data-v-682d2ff8"]]);var X=O;const A={class:"form-container slide-down",style:{padding:"20px"}},V=(0,i.Lk)("h2",null,"Retirar Vehículo",-1),j=(0,i.Lk)("label",{for:"licensePlate"},"Placa:",-1),S=(0,i.Lk)("div",{class:"classButton"},[(0,i.Lk)("button",{type:"submit"},"Retirar")],-1),D={key:0},I={key:1,class:"license-plates-container"},$=(0,i.Lk)("h3",null,"Placas de vehículos activos:",-1),N={class:"license-plates-list"};function Q(e,t,o,r,s,n){return(0,i.uX)(),(0,i.CE)("div",A,[V,(0,i.Lk)("form",{onSubmit:t[1]||(t[1]=(0,a.D$)(((...e)=>n.submitForm&&n.submitForm(...e)),["prevent"]))},[(0,i.Lk)("div",null,[j,(0,i.bo)((0,i.Lk)("input",{type:"text",id:"licensePlate","onUpdate:modelValue":t[0]||(t[0]=e=>s.vehicle.licensePlate=e),required:""},null,512),[[a.Jo,s.vehicle.licensePlate]])]),S,s.message?((0,i.uX)(),(0,i.CE)("div",D,(0,l.v_)(s.message),1)):(0,i.Q3)("",!0),s.licensePlates.length?((0,i.uX)(),(0,i.CE)("div",I,[$,(0,i.Lk)("ul",N,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(s.licensePlates,(e=>((0,i.uX)(),(0,i.CE)("li",{key:e,class:"license-plate-item"},(0,l.v_)(e),1)))),128))])])):(0,i.Q3)("",!0)],32)])}var U={data(){return{vehicle:{licensePlate:"",error:null},message:"",licensePlates:[]}},methods:{async submitForm(){try{const e=await this.$axios.patch("/cars",{license_plate:this.vehicle.licensePlate});console.log("Respuesta del servidor:",e.data),this.message=`El carro de placa ${this.vehicle.licensePlate} ha salido del parqueadero`,this.fetchLicensePlates()}catch(e){console.error("Error al retirar el vehículo:",e),this.message="Hubo un error al retirar el vehículo. Por favor, inténtalo de nuevo."}},async fetchLicensePlates(){try{const e=await this.$axios.get("/cars/license-plates");this.licensePlates=e.data}catch(e){e.response&&404===e.response.status?(console.error("No hay vehículos activos disponibles en este momento."),this.message="No hay vehículos activos disponibles en este momento."):(console.error("Ocurrió un error al cargar las placas de los vehículos activos:",e),this.message="Ocurrió un error al cargar las placas de los vehículos activos, intenta más tarde.")}}},mounted(){this.fetchLicensePlates()}};const q=(0,T.A)(U,[["render",Q]]);var B=q;const H=e=>((0,i.Qi)("data-v-406434bb"),e=e(),(0,i.jt)(),e),K={class:"table-container"},W={key:0},J=H((()=>(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",null,"Placa"),(0,i.Lk)("th",null,"Color"),(0,i.Lk)("th",null,"Hora de entrada"),(0,i.Lk)("th",null,"Estado"),(0,i.Lk)("th",null,"Imagen")])],-1))),z=["src"],G={key:1},Y={key:2};function Z(e,t,o,r,a,s){return(0,i.uX)(),(0,i.CE)("div",K,[a.vehiclesLocal.length>0?((0,i.uX)(),(0,i.CE)("table",W,[J,(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.vehiclesLocal,((e,t)=>((0,i.uX)(),(0,i.CE)("tr",{key:t},[(0,i.Lk)("td",null,(0,l.v_)(e.license_plate),1),(0,i.Lk)("td",null,(0,l.v_)(e.color),1),(0,i.Lk)("td",null,(0,l.v_)(s.formatEntryTime(e.entrytime)),1),(0,i.Lk)("td",null,(0,l.v_)(e.state),1),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:e.imageurl,alt:"Imagen del vehículo",style:{"max-width":"100px","max-height":"100px"}},null,8,z)])])))),128))])])):a.error?((0,i.uX)(),(0,i.CE)("p",G,(0,l.v_)(a.errorMessage),1)):((0,i.uX)(),(0,i.CE)("p",Y,"No hay vehículos registrados."))])}var ee={name:"VehicleTable",props:{vehicles:{type:Array,default:()=>[]}},data(){return{vehiclesLocal:this.vehicles,loading:!0,error:!1,errorMessage:"No fue posible conectar con el servicio ahora, intenta más tarde."}},methods:{async getVehicles(){try{const e=await this.$axios.get("/cars");this.vehiclesLocal=e.data,this.$emit("update:vehicles",e.data)}catch(e){console.error("Error al obtener los vehículos:",e),this.error=!0}finally{this.loading=!1}},formatEntryTime(e){const t=new Date(e),o={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};return t.toLocaleString("es-ES",o)},formatExitTime(e){if(0===e||null===e)return"-";{const t=new Date(e),o={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};return t.toLocaleString("es-ES",o)}}},mounted(){this.getVehicles()}};const te=(0,T.A)(ee,[["render",Z],["__scopeId","data-v-406434bb"]]);var oe=te,re={name:"App",components:{VehicleRegistrationForm:X,VehicleRetrievalForm:B,VehicleTable:oe},data(){return{showRegistrationForm:!1,showRetrievalForm:!1,showTableForm:!1}},computed:{showFooterMargin(){return!(this.showRegistrationForm||this.showRetrievalForm||this.showTableForm)}}};const ae=(0,T.A)(re,[["render",p]]);var se=ae;window.__VUE_PROD_DEVTOOLS__=!1,window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1;const ie=(0,a.Ef)(se);r.A.defaults.baseURL={NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_API_URL,ie.config.globalProperties.$axios=r.A,ie.mixin({data(){return{vehicleslist:(0,s.KR)([])}},methods:{async getVehicles(){try{const e=await this.$axios.get("/cars");this.vehicles=e.data}catch(e){console.error("Error al obtener los vehículos:",e)}}}}),ie.mount("#app")}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,o),s.exports}o.m=e,function(){var e=[];o.O=function(t,r,a,s){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],s=e[u][2];for(var l=!0,n=0;n<r.length;n++)(!1&s||i>=s)&&Object.keys(o.O).every((function(e){return o.O[e](r[n])}))?r.splice(n--,1):(l=!1,s<i&&(i=s));if(l){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,a,s]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,s,i=r[0],l=r[1],n=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(n)var u=n(o)}for(t&&t(r);c<i.length;c++)s=i[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(u)},r=self["webpackChunkparking_lot_frontend"]=self["webpackChunkparking_lot_frontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[504],(function(){return o(6013)}));r=o.O(r)})();
//# sourceMappingURL=app.a3002648.js.map
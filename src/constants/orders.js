const all_orders = [
    {
        id: "1",
        date: "14 Jan, 14:20 AM",
        email: "kokom.komariyah@gmail.com",
        first_name: "Kokom",
        last_name: "Komariyah",
        avatar: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg",
        product: "Laptop DELL Latitude 7490 Core i7 Gen 8 RAM 16GB SSD 512GB",
        price: "Rp4.350.000",
        status: "Paid"
    },
    {
        id: "2",
        date: "2 Feb, 20:20 PM",
        email: "asep.sulaeman@gmail.com",
        first_name: "Asep",
        last_name: "Sulaeman",
        avatar: "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg",
        product: "ASUS Vivobook 13 Slate OLED T3300KA N6000 8GB 256GB 13.3 FHD OLED W11",
        price: "Rp8.370.130",
        status: "Canceled"
    },
    {
        id: "3",
        date: "8 Feb, 14:25 PM",
        email: "mang.toyib@gmail.com",
        first_name: "Mang",
        last_name: "Toyib",
        avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
        product: "Laptop Lenovo Ideapad Slim 1 Ryzen 3 5300U 512GB SSD 8GB W11+OHS - CLOUD GREY,8GB STANDARD",
        price: "6.979.000",
        status: "Paid"
    },
    {
        id: "4",
        date: "24 Feb, 18:20 PM",
        email: "cecep.rifai@gmail.com",
        first_name: "Cecep",
        last_name: "Rifai",
        avatar: "https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg",
        product: "DELL VOSTRO V3510-I31115G4-8-256-U-W11-F-O",
        price: "Rp6.399.000",
        status: "Refunded"
    },
    {
        id: "5",
        date: "3 Mar, 11:20 AM",
        email: "sirajudin.mahmud@gmail.com",
        first_name: "Sirajudin",
        last_name: "Mahmud",
        avatar: "https://static.vecteezy.com/system/resources/previews/002/002/427/non_2x/man-avatar-character-isolated-icon-free-vector.jpg",
        product: "ACER SWIFT 3 SF314-43-R7EV R7-5700U,16G,SSD1TB,Win11,BLUE,NX.ACPSN.002",
        price: "Rp14.349.000",
        status: "Canceled"
    },
    {
        id: "6",
        date: "14 Mar, 19:20 PM",
        email: "david.immanuel@gmail.com",
        first_name: "David",
        last_name: "Immanuel",
        avatar: "https://static.vecteezy.com/system/resources/previews/002/002/332/non_2x/ablack-man-avatar-character-isolated-icon-free-vector.jpg",
        product: "MacBook Air 2022 M2 Chip 13 Inch 512GB 256GB RAM 8GB Apple IBOX - INTER, 256GB GREY",
        price: "Rp17.075.000",
        status: "Paid"
    },
    {
        id: "7",
        date: "9 Apr, 17:30 PM",
        email: "agus.suparmanto@gmail.com",
        first_name: "Agus",
        last_name: "Suparmanto",
        avatar: "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
        product: "MacBook Pro 2022 M2 Chip 13 Inch 512GB 256GB RAM 8GB Grey Silver IBOX - 256GB INTER, SILVER",
        price: "Rp18.440.000",
        status: "Paid"
    },
    {
        id: "8",
        date: "18 May, 15:40 PM",
        email: "dedi.saputra@gmail.com",
        first_name: "Dedi",
        last_name: "Saputra",
        avatar: "https://icones.pro/wp-content/uploads/2021/03/avatar-de-personne-icone-homme.png",
        product: "HP CHROMEBOOK 11 G8 / N4020/4GB/160GB/11.6 HD LAPTOP PELAJAR MURAH - Bundle Normal, 32gb",
        price: "Rp1.895.000",
        status: "Canceled"
    },
    {
        id: "9",
        date: "13 Jun, 14:30 PM",
        email: "angga.kurniawan@gmail.com",
        first_name: "Angga",
        last_name: "Kurniawan",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6Uyi30Ty2WkMb0ZjuFLoXmkRwrrMObm-X2zztWtGbOgyA-i7mFzuiSKltN14HLAJDVM&usqp=CAU",
        product: "Acer Aspire 3 Slim A314-22 - AMD A3020e 4GB SSD 256GB 14 HD W10 OHS - HD 1366x768",
        price: "Rp3.820.830",
        status: "Paid"
    },
    {
        id: "10",
        date: "1 Jul, 18:59 PM",
        email: "hendra.gustiawan@gmail.com",
        first_name: "Hendra",
        last_name: "Gustiawan",
        avatar: "https://cdn-icons-png.flaticon.com/512/147/147133.png",
        product: "Apple Macbook Air 2020 M1 Chip 512GB Space Gray Gold Silver 256GB - INTER CPO, 256GB GREY",
        price: "Rp13.598.000",
        status: "Refunded"
    },
    {
        id: "11",
        date: "25 Jul, 19:45 PM",
        email: "rindu.salsabila@gmail.com",
        first_name: "Rindu",
        last_name: "Salsabila",
        avatar: "https://cdn3.vectorstock.com/i/1000x1000/43/72/muslim-avatar-people-flat-icon-vector-28504372.jpg",
        product: "ASUS Vivobook M415DAO FHD352 RYZEN 3 3250 8GB 512SSD W11+OHS 14 FHD - SILVER",
        price: "Rp6.699.000",
        status: "Canceled"
    },
    {
        id: "12",
        date: "25 Jul, 20:30 PM",
        email: "intan.saraswati@gmail.com",
        first_name: "Intan",
        last_name: "Saraswati",
        avatar: "https://cdn-icons-png.flaticon.com/512/3100/3100791.png",
        product: "ASUS A416JAO FHD321 FHD322 i3 1005G1 4GB 256ssd W10+OHS 14.0FHD IPS - FHD",
        price: "Rp5.195.000",
        status: "Paid"
    }
]

export default all_orders;
<template>
    <div class="wrap-fixed__menu">
        <div class="fixed-menu">
            <a href="#" class="hovericon">
                <v-icon
                    icon="mdi-bullhorn"
                    style="font-size: 20px"
                    class="ml-n1 mt-n1"
                ></v-icon
            ></a>
            <h5>latest promotion</h5>
        </div>
        <div class="fixed-menu">
            <a href="#">
                <v-icon
                    icon="mdi-account-group"
                    style="font-size: 20px"
                    class="ml-n1 mt-n1"
                ></v-icon>
            </a>
            <h5>loyalty program</h5>
        </div>
        <div class="fixed-menu">
            <a href="#">
                <v-icon
                    icon="mdi-format-list-bulleted"
                    style="font-size: 20px"
                    class="ml-n1 mt-n1"
                ></v-icon>
            </a>
            <h5>how to book</h5>
        </div>
        <div class="fixed-menu">
            <a href="#">
                <v-icon
                    icon="mdi-bus"
                    style="font-size: 20px"
                    class="ml-n1 mt-n1"
                ></v-icon>
            </a>
            <h5>bus operator</h5>
        </div>
        <div class="fixed-menu">
            <a href="#">
                <v-icon
                    icon="mdi-help-circle"
                    style="font-size: 20px"
                    class="ml-n1 mt-n1"
                ></v-icon>
            </a>
            <h5>booking fAQ</h5>
        </div>
        <div class="fixed-menu">
            <a href="#">
                <v-icon
                    icon="mdi-magnify-plus"
                    style="font-size: 20px"
                    class="ml-n1 mt-n1"
                ></v-icon>
            </a>
            <h5>recent search</h5>
        </div>
    </div>

    <v-toolbar style="height: 130px" class="d-flex justify-center headercolor">
        <v-container align="center">
            <v-row justify="center" dense>
                <v-col cols="6" class="mt-5">
                    <img
                        src="https://cdn.busonlineticket.com/images/2022/05/BOT-Logo_White.png"
                        class="logoimg"
                        alt=""
                    />
                </v-col>

                <v-col cols="6">
                    <v-list-item>
                        <v-menu open-on-hover>
                            <template v-slot:activator="{ props }">
                                <v-btn
                                    color="orange-lighten-1"
                                    v-bind="props"
                                    class="normaltxt"
                                >
                                    Language
                                    <v-icon
                                        icon="mdi-menu-down"
                                        class="angle-down"
                                    ></v-icon>
                                </v-btn>
                            </template>

                            <v-list class="bg-indigo-darken-4">
                                <v-list-item
                                    color="indigo-darken-4"
                                    v-for="(item, index) in language"
                                    :key="index"
                                >
                                    <v-list-item-title
                                        class="text-center"
                                        style="cursor: pointer"
                                        color="indigo-darken-4"
                                        >{{ item.title }}</v-list-item-title
                                    >
                                </v-list-item>
                            </v-list>
                        </v-menu>

                        <v-menu open-on-hover>
                            <template v-slot:activator="{ props }">
                                <v-btn
                                    color="orange-lighten-1"
                                    v-bind="props"
                                    class="normaltxt"
                                >
                                    RM
                                    <v-icon
                                        icon="mdi-menu-down"
                                        class="angle-down"
                                    ></v-icon>
                                </v-btn>
                            </template>

                            <v-list class="bg-indigo-darken-4 ml-n14">
                                <v-list-item
                                    v-for="(money, index) in monies"
                                    :key="index"
                                >
                                    <v-list-item-title
                                        style="cursor: pointer"
                                        >{{ money.luy }}</v-list-item-title
                                    >
                                </v-list-item>
                            </v-list>
                        </v-menu>

                        <v-btn color="orange-lighten-1" class="normaltxt">
                            <v-icon
                                color="orange-lighten-1"
                                icon="mdi-account"
                                class="angle-down pr-3"
                            ></v-icon>
                            Log In /sign up
                        </v-btn>
                        <v-btn color="orange-lighten-1" class="normaltxt">
                            Check My booking</v-btn
                        >
                    </v-list-item>
                </v-col>

                <v-col cols="6"> </v-col>

                <v-col cols="6" class="mt-n7 d-flex pl-4">
                    <v-list-item>
                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-btn
                                    class="hoverbtn"
                                    v-bind="props"
                                    :color="isHovering ? 'info' : 'white'"
                                >
                                    Home
                                </v-btn>
                            </template>
                        </v-hover>

                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-btn
                                    class="hoverbtn"
                                    v-bind="props"
                                    :color="isHovering ? 'info' : 'white'"
                                >
                                    Bus Tickets
                                </v-btn>
                            </template>
                        </v-hover>

                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-btn
                                    class="hoverbtn"
                                    v-bind="props"
                                    :color="isHovering ? 'info' : 'white'"
                                >
                                    bus hotel
                                </v-btn>
                            </template>
                        </v-hover>

                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-btn
                                    class="hoverbtn"
                                    v-bind="props"
                                    :color="isHovering ? 'info' : 'white'"
                                >
                                    furry ticket
                                </v-btn>
                            </template>
                        </v-hover>

                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-btn
                                    class="hoverbtn"
                                    v-bind="props"
                                    :color="isHovering ? 'info' : 'white'"
                                >
                                    train ticket
                                </v-btn>
                            </template>
                        </v-hover>

                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-btn
                                    class="hoverbtn"
                                    v-bind="props"
                                    :color="isHovering ? 'info' : 'white'"
                                >
                                    tour & attraction
                                </v-btn>
                            </template>
                        </v-hover>
                    </v-list-item>
                </v-col>
            </v-row>
        </v-container>
    </v-toolbar>

    <!-- Create Slide Show -->
    <v-carousel
        cycle
        height="570"
        hide-delimiter-background
        show-arrows="hover"
        color="yellow"
        style="position: absolute"
    >
        <div style="width: 100%">
            <v-carousel-item
                v-for="(item, index) in slideimg"
                :key="index"
                :src="item"
                height="100%"
                style="display: flex"
            >
                <div style="margin: 0 10%; padding-top: 100px; width: 100%">
                    <v-list-item
                        v-if="index == 0"
                        class="d-flex text-left justify-center mt-16"
                        align="center"
                    >
                        <p
                            style="
                                color: white;
                                font-size: 50px;
                                font-weight: bold;
                            "
                        >
                            Travel At Ease
                        </p>
                        <p style="color: white; font-size: 25px">
                            Coverage up to RM 25,000
                        </p>
                        <h1 style="color: yellow">only from RM 1</h1>
                    </v-list-item>
                </div>
                <div style="margin: 0 10%; padding-top: 100px; width: 100%">
                    <v-list-item
                        v-if="index == 1"
                        class="d-flex text-left justify-center mt-n14"
                        align="center"
                    >
                        <p
                            style="
                                color: white;
                                font-size: 25px;
                                font-weight: bold;
                            "
                        >
                            Don't worry, we offer Flexibility!
                        </p>
                        <br />
                        <h2 style="color: yellow">✔ Reschedulable Trips</h2>
                        <br />
                        <h2 style="color: yellow">✔ Refundable Trips</h2>
                    </v-list-item>
                </div>

                <div style="margin: 0 10%; padding-top: 10px; width: 100%">
                    <v-list-item
                        v-if="index == 2"
                        class="d-flex text-left justify-center mt-n16"
                        align="center"
                    >
                        <p
                            style="
                                color: yellow;
                                font-size: 30px;
                                font-weight: bold;
                            "
                        >
                            Member Benefits
                        </p>
                        <br />
                        <div
                            style="
                                color: white;
                                font-size: 25px;
                                font-weight: bold;
                            "
                        >
                            <v-icon
                                icon="mdi-circle-small"
                                style="font-size: 40px"
                            ></v-icon>
                            BOT Miles <br />
                            <v-icon
                                icon="mdi-circle-small"
                                style="font-size: 40px"
                            ></v-icon>
                            Birthday Reward <br />
                            <v-icon
                                icon="mdi-circle-small"
                                style="font-size: 40px"
                            ></v-icon>
                            Referral Program <br />
                            <v-icon
                                icon="mdi-circle-small"
                                style="font-size: 40px"
                            ></v-icon>
                            Member Exclusive Offers
                        </div>
                    </v-list-item>
                </div>
            </v-carousel-item>
        </div>
    </v-carousel>

    <!-- Create Form to register for trip -->
    <div
        style="
            width: 430px;
            height: 510px;
            border-radius: 5px;
            background-color: white;
            transform: translate(250px, 50px);
        "
    >
        <v-row>
            <v-col cols="12" class="d-flex justify-center">
                <v-btn-toggle v-model="text" rounded="0" color="info" group>
                    <v-btn value="bus" style="font-size: 15px">
                        <v-icon icon="mdi-bus"></v-icon> Bus
                    </v-btn>

                    <v-btn value="train" style="font-size: 15px">
                        <v-icon icon="mdi-train"></v-icon>Train
                    </v-btn>

                    <v-btn value="furry" style="font-size: 15px">
                        <v-icon icon="mdi-ferry"></v-icon>Ferry
                    </v-btn>
                </v-btn-toggle>
            </v-col>
        </v-row>

        <v-card-text>
            <v-window v-model="text">
                <v-window-item value="bus">
                    <v-container>
                        <h3 style="color: black">
                            Book Singapore & Malaysia Bus Tickets Online
                        </h3>
                        <v-combobox
                            class="mt-4"
                            style="color: black; width: 350px"
                            label="Origin"
                            :items="origin"
                        >
                        </v-combobox>

                        <v-combobox
                            class="mt-n5"
                            style="color: black; width: 350px"
                            label="Destination"
                            :items="origin"
                        >
                        </v-combobox>

                        <v-text-field
                            class="mt-2"
                            style="color: black; width: 350px"
                            label="Check-In Date"
                            type="date"
                        >
                        </v-text-field>

                        <v-text-field
                            class="mt-n5"
                            style="color: black; width: 350px"
                            label="Return Date (optional)"
                            type="date"
                        >
                        </v-text-field>

                        <v-btn class="bg-orange-darken-3" width="350px">
                            Search Buses
                            <v-icon
                                icon="mdi-magnify"
                                class="ml-3"
                                style="font-size: 23px; font-weight: bold"
                            ></v-icon
                        ></v-btn>

                        <div
                            class="mt-4"
                            style="color: blue; font-weight: bold"
                        >
                            <v-icon icon="mdi-access-point"></v-icon>
                            <a href="#" style="color: blue">
                                Suggest New Route
                            </a>
                        </div>
                    </v-container>
                </v-window-item>

                <v-window-item value="train">
                    <v-container>
                        <h3 style="color: black">
                            Book KTMB & KLIA Express Train Ticket Online
                        </h3>
                        <v-combobox
                            class="mt-4"
                            style="color: black; width: 350px"
                            label="Origin"
                            :items="origin"
                        >
                        </v-combobox>

                        <v-combobox
                            class="mt-n5"
                            style="color: black; width: 350px"
                            label="Destination"
                            :items="origin"
                        >
                        </v-combobox>

                        <v-text-field
                            class="mt-2"
                            style="color: black; width: 350px"
                            label="Check-In Date"
                            type="date"
                        >
                        </v-text-field>

                        <v-text-field
                            class="mt-n5"
                            style="color: black; width: 350px"
                            label="Return Date (optional)"
                            type="date"
                        >
                        </v-text-field>

                        <v-btn class="bg-orange-darken-3" width="350px">
                            Search Train
                            <v-icon
                                icon="mdi-magnify"
                                class="ml-3"
                                style="font-size: 23px; font-weight: bold"
                            ></v-icon>
                        </v-btn>

                        <div
                            class="mt-4"
                            style="color: blue; font-weight: bold"
                        >
                            <v-icon icon="mdi-access-point"></v-icon>
                            <a href="#" style="color: blue">
                                Suggest New Route
                            </a>
                        </div>
                    </v-container>
                </v-window-item>

                <v-window-item value="furry">
                    <v-container>
                        <h3 style="color: black">
                            Book KTMB & KLIA Express Train Ticket Online
                        </h3>
                        <v-combobox
                            class="mt-4"
                            style="color: black; width: 350px"
                            label="Origin"
                            :items="origin"
                        >
                        </v-combobox>

                        <v-combobox
                            class="mt-n5"
                            style="color: black; width: 350px"
                            label="Destination"
                            :items="origin"
                        >
                        </v-combobox>

                        <v-text-field
                            class="mt-2"
                            style="color: black; width: 350px"
                            label="Check-In Date"
                            type="date"
                        >
                        </v-text-field>

                        <v-text-field
                            class="mt-n5"
                            style="color: black; width: 350px"
                            label="Return Date (optional)"
                            type="date"
                        >
                        </v-text-field>

                        <v-btn class="bg-orange-darken-3" width="350px">
                            Search Ferry
                            <v-icon
                                icon="mdi-magnify"
                                class="ml-3"
                                style="font-size: 23px; font-weight: bold"
                            ></v-icon
                        ></v-btn>

                        <div
                            class="mt-4"
                            style="color: blue; font-weight: bold"
                        >
                            <v-icon icon="mdi-access-point"></v-icon>
                            <a href="#" style="color: blue">
                                Suggest New Route
                            </a>
                        </div>
                    </v-container>
                </v-window-item>
            </v-window>
        </v-card-text>
    </div>

    <!-- Create Second slides show below first slides show -->
    <div style="margin-top: 4rem; height: 150px; background-color: #2b61ea">
        <v-sheet class="mx-auto pt-4" max-width="1105" color="#2b61ea">
            <v-slide-group>
                <v-slide-group-item>
                    <v-list-item
                        class="ma-2"
                        @click="toggle"
                        width="310"
                        height="90"
                        style="
                            border: 1px dashed white;
                            border-bottom: 0;
                            background: none;
                            border-top: 0;
                            border-left: 0;
                        "
                        v-for="(cardslide, index) in cardslides"
                        :key="index"
                    >
                        <p
                            style="
                                font-size: 15px;
                                color: white;
                                margin-top: 20px;
                            "
                        >
                            {{ cardslide.title }}
                        </p>
                        <div style="display: flex; gap: 30px">
                            <small
                                style="
                                    width: 10px;
                                    color: white;
                                    padding-top: 20px;
                                "
                            >
                                Price From
                            </small>
                            <p
                                style="
                                    font-size: 35px;
                                    color: gold;
                                    font-weight: bold;
                                    padding: 14px 0;
                                "
                            >
                                {{ cardslide.cate }}
                            </p>
                            <v-btn
                                rounded
                                variant="outlined"
                                width="110px"
                                height="30"
                                class="mt-5 ml-n5"
                                style="
                                    border: 2px solid white;
                                    color: white;
                                    font-size: 11px;
                                    font-weight: bold;
                                "
                            >
                                Book Now
                            </v-btn>
                        </div>
                    </v-list-item>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>

    <!-- Create 4 images -->
    <v-container class="mt-5 pt-5" align="center">
        <v-row dense justify="center">
            <v-col cols="2">
                <img
                    src="https://cdn.busonlineticket.com/images/2022/04/Why-Book-with-BOT-Ticket-Price.jpg"
                    alt=""
                />
                <div class="font-weight-bold">
                    Same Ticket Price <br />
                    as Counter
                </div>
            </v-col>
            <v-col cols="2">
                <img
                    src="https://cdn.busonlineticket.com/images/2022/04/Why-Book-with-BOT-Promotion.jpg"
                    alt=""
                />
                <div class="font-weight-bold">
                    Monthly <br />
                    Promotion
                </div>
            </v-col>
            <v-col cols="2">
                <img
                    src="https://cdn.busonlineticket.com/images/2022/04/Why-Book-with-BOT-Reward.jpg"
                    alt=""
                />
                <div class="font-weight-bold">
                    Reward <br />
                    Points
                </div>
            </v-col>
            <v-col cols="2">
                <img
                    src="https://cdn.busonlineticket.com/images/2022/04/Why-Book-with-BOT-Help-Line.jpg"
                    alt=""
                />
                <div class="font-weight-bold">
                    Professional <br />
                    Help Line
                </div>
            </v-col>
        </v-row>
    </v-container>

    <!-- Three Slides in one container -->
    <v-container>
        <v-row dense justify="center">
            <v-sheet max-width="1603">
                <v-slide-group v-model="model" class="pa-4">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-slide-group-item v-slot="{ toggle }">
                            <v-card
                                class="d-flex"
                                :class="['ma-3']"
                                height="250"
                                @click="toggle"
                                v-bind="props"
                            >
                                <img
                                    src="https://cdn.busonlineticket.com/images/2022/07/BOT-New-Member-Promo_EN.jpg"
                                    alt=""
                                />

                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        align="center"
                                        class="d-flex flex-column mt-10 transition-fast-out bg-black v-card--reveal"
                                        style="height: 100%"
                                    >
                                        <v-card
                                            class="mt-n5 w-100 h-25"
                                            style="
                                                background-color: #0d47a1;
                                                color: white;
                                                padding-top: 15px;
                                                border-radius: 0 0 10px 10px;
                                            "
                                        >
                                            <h2>New Member Exclusive</h2>
                                        </v-card>
                                        <h2
                                            style="
                                                color: yellow;
                                                margin-top: 30px;
                                            "
                                        >
                                            50% Offer
                                        </h2>
                                        <h4>
                                            Sign up as member and enjoy up to
                                            50% Offer on your first booking!
                                        </h4>

                                        <v-btn
                                            class="mt-5"
                                            style="
                                                border-radius: 30px;
                                                border: 2px solid white;
                                                opacity: 1;
                                            "
                                            color="error"
                                        >
                                            Learn More
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-slide-group-item>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }">
                        <v-slide-group-item v-slot="{ toggle }">
                            <v-card
                                class="d-flex"
                                :class="['ma-3']"
                                height="250"
                                @click="toggle"
                                v-bind="props"
                            >
                                <img
                                    src="https://cdn.busonlineticket.com/images/2023/03/Awal-Ramadhan-Promo_RotatingBanner_EN.jpg"
                                    alt=""
                                />

                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        align="center"
                                        class="d-flex flex-column mt-10 transition-fast-out bg-black v-card--reveal"
                                        style="height: 100%"
                                    >
                                        <v-card
                                            class="mt-n11 w-100 h-25"
                                            style="
                                                background-color: #0d47a1;
                                                color: white;
                                                padding-top: 15px;
                                                border-radius: 0 0 10px 10px;
                                            "
                                        >
                                            <h2>
                                                Celebrate Ramadhan with your
                                                loved...
                                            </h2>
                                        </v-card>
                                        <h2
                                            style="
                                                color: yellow;
                                                margin-top: 30px;
                                            "
                                        >
                                            20% * OFF
                                        </h2>
                                        <h4>Valid for selected trips only</h4>

                                        <v-btn
                                            class="mt-5"
                                            style="
                                                border-radius: 30px;
                                                border: 2px solid white;
                                                opacity: 1;
                                            "
                                            color="error"
                                        >
                                            Learn More
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-slide-group-item>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }">
                        <v-slide-group-item v-slot="{ toggle }">
                            <v-card
                                class="d-flex"
                                :class="['ma-3']"
                                height="250"
                                @click="toggle"
                                v-bind="props"
                            >
                                <img
                                    src="https://cdn.busonlineticket.com/images/2023/02/POP-rotating-banner-EN.png"
                                    alt=""
                                />

                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        align="center"
                                        class="d-flex flex-column mt-10 transition-fast-out bg-black v-card--reveal"
                                        style="height: 100%"
                                    >
                                        <v-card
                                            class="mt-n5 w-100 h-25"
                                            style="
                                                background-color: #0d47a1;
                                                color: white;
                                                padding-top: 15px;
                                                border-radius: 0 0 10px 10px;
                                            "
                                        >
                                            <h2>
                                                Exclusive Bus Ticket PWP Deals
                                            </h2>
                                        </v-card>
                                        <h2
                                            style="
                                                color: yellow;
                                                margin-top: 30px;
                                                padding: 0 30px;
                                            "
                                        >
                                            Save More On Attraction Tickets
                                            Purchase!
                                        </h2>
                                        <h4>
                                            Check out our exclusive PWP deals
                                            now!
                                        </h4>

                                        <v-btn
                                            class="mt-5"
                                            style="
                                                border-radius: 30px;
                                                border: 2px solid white;
                                                opacity: 1;
                                            "
                                            color="error"
                                        >
                                            Learn More
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-slide-group-item>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }">
                        <v-slide-group-item v-slot="{ toggle }">
                            <v-card
                                class="d-flex"
                                :class="['ma-3']"
                                height="250"
                                @click="toggle"
                                v-bind="props"
                            >
                                <img
                                    src="https://cdn.busonlineticket.com/images/2023/03/Awal-Ramadhan-Promo_RotatingBanner_EN.jpg"
                                    alt=""
                                />

                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        align="center"
                                        class="d-flex flex-column mt-10 transition-fast-out bg-black v-card--reveal"
                                        style="height: 100%"
                                    >
                                        <v-card
                                            class="mt-n11 w-100 h-25"
                                            style="
                                                background-color: #0d47a1;
                                                color: white;
                                                padding-top: 15px;
                                                border-radius: 0 0 10px 10px;
                                            "
                                        >
                                            <h2>
                                                Celebrate Ramadhan with your
                                                loved...
                                            </h2>
                                        </v-card>
                                        <h2
                                            style="
                                                color: yellow;
                                                margin-top: 30px;
                                            "
                                        >
                                            20% * OFF
                                        </h2>
                                        <h4>Valid for selected trips only</h4>

                                        <v-btn
                                            class="mt-5"
                                            style="
                                                border-radius: 30px;
                                                border: 2px solid white;
                                                opacity: 1;
                                            "
                                            color="error"
                                        >
                                            Learn More
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-slide-group-item>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }">
                        <v-slide-group-item v-slot="{ toggle }">
                            <v-card
                                class="d-flex"
                                :class="['ma-3']"
                                height="250"
                                @click="toggle"
                                v-bind="props"
                            >
                                <img
                                    src="https://cdn.busonlineticket.com/images/2023/03/KKKL_SingaporeGenting_RotatingBanner-2.png"
                                    alt=""
                                />
                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        align="center"
                                        class="d-flex flex-column mt-10 transition-fast-out bg-black v-card--reveal"
                                        style="height: 100%"
                                    >
                                        <v-card
                                            class="mt-n11 w-100 h-25"
                                            style="
                                                background-color: #0d47a1;
                                                color: white;
                                                padding-top: 15px;
                                                border-radius: 0 0 10px 10px;
                                            "
                                        >
                                            <h2>2-way Promo SG-Genting</h2>
                                        </v-card>
                                        <h2
                                            style="
                                                color: yellow;
                                                margin-top: 30px;
                                            "
                                        >
                                            10% OFF
                                        </h2>
                                        <h4>
                                            Travel to Genting Highlands with
                                            KKKL
                                        </h4>

                                        <v-btn
                                            class="mt-5"
                                            style="
                                                border-radius: 30px;
                                                border: 2px solid white;
                                                opacity: 1;
                                            "
                                            color="error"
                                        >
                                            Book Now
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-slide-group-item>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }">
                        <v-slide-group-item v-slot="{ toggle }">
                            <v-card
                                class="d-flex"
                                :class="['ma-3']"
                                height="250"
                                @click="toggle"
                                v-bind="props"
                            >
                                <img
                                    src="https://cdn.busonlineticket.com/images/2023/02/POP-rotating-banner-EN.png"
                                    alt=""
                                />

                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        align="center"
                                        class="d-flex flex-column mt-10 transition-fast-out bg-black v-card--reveal"
                                        style="height: 100%"
                                    >
                                        <v-card
                                            class="mt-n5 w-100 h-25"
                                            style="
                                                background-color: #0d47a1;
                                                color: white;
                                                padding-top: 15px;
                                                border-radius: 0 0 10px 10px;
                                            "
                                        >
                                            <h2>New Member Exclusive</h2>
                                        </v-card>
                                        <h2
                                            style="
                                                color: yellow;
                                                margin-top: 30px;
                                            "
                                        >
                                            50% Offer
                                        </h2>
                                        <h4>
                                            Sign up as member and enjoy up to
                                            50% Offer on your first booking!
                                        </h4>

                                        <v-btn
                                            class="mt-5"
                                            style="
                                                border-radius: 30px;
                                                border: 2px solid white;
                                                opacity: 1;
                                            "
                                            color="error"
                                        >
                                            Learn More
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-slide-group-item>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }">
                        <v-slide-group-item v-slot="{ toggle }">
                            <v-card
                                class="d-flex"
                                :class="['ma-3']"
                                height="250"
                                @click="toggle"
                                v-bind="props"
                            >
                                <img
                                    src="https://cdn.busonlineticket.com/images/2023/03/KKKL_SingaporeGenting_RotatingBanner-2.png"
                                    alt=""
                                />
                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        align="center"
                                        class="d-flex flex-column mt-10 transition-fast-out bg-black v-card--reveal"
                                        style="height: 100%"
                                    >
                                        <v-card
                                            class="mt-n11 w-100 h-25"
                                            style="
                                                background-color: #0d47a1;
                                                color: white;
                                                padding-top: 15px;
                                                border-radius: 0 0 10px 10px;
                                            "
                                        >
                                            <h2>2-way Promo SG-Genting</h2>
                                        </v-card>
                                        <h2
                                            style="
                                                color: yellow;
                                                margin-top: 30px;
                                            "
                                        >
                                            10% OFF
                                        </h2>
                                        <h4>
                                            Travel to Genting Highlands with
                                            KKKL
                                        </h4>

                                        <v-btn
                                            class="mt-5"
                                            style="
                                                border-radius: 30px;
                                                border: 2px solid white;
                                                opacity: 1;
                                            "
                                            color="error"
                                        >
                                            Book Now
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-slide-group-item>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }">
                        <v-slide-group-item v-slot="{ toggle }">
                            <v-card
                                class="d-flex"
                                :class="['ma-3']"
                                height="250"
                                @click="toggle"
                                v-bind="props"
                            >
                                <img
                                    src="https://cdn.busonlineticket.com/images/2021/03/Refund-Protect-BOT-Care-min.jpg"
                                    alt=""
                                />
                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        align="center"
                                        class="d-flex flex-column mt-10 transition-fast-out bg-black v-card--reveal"
                                        style="height: 100%"
                                    >
                                        <v-card
                                            class="mt-n5 w-100 h-25"
                                            style="
                                                background-color: #0d47a1;
                                                color: white;
                                                padding-top: 15px;
                                                border-radius: 0 0 10px 10px;
                                            "
                                        >
                                            <h2>100% Refundable</h2>
                                        </v-card>
                                        <h2
                                            style="
                                                color: yellow;
                                                margin-top: 30px;
                                            "
                                        >
                                            Refund Protect
                                        </h2>
                                        <h4 style="padding: 0 30px">
                                            You can get 100% Refund when you
                                            cancel booking for special
                                            circumstances.
                                        </h4>

                                        <v-btn
                                            class="mt-5"
                                            style="
                                                border-radius: 30px;
                                                border: 2px solid white;
                                                opacity: 1;
                                            "
                                            color="error"
                                        >
                                            Learn More
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-slide-group-item>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }">
                        <v-slide-group-item v-slot="{ toggle }">
                            <v-card
                                class="d-flex"
                                :class="['ma-3']"
                                height="250"
                                @click="toggle"
                                v-bind="props"
                            >
                                <img
                                    src="https://cdn.busonlineticket.com/images/2023/03/KKKL_SingaporeGenting_RotatingBanner-2.png"
                                    alt=""
                                />
                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        align="center"
                                        class="d-flex flex-column mt-10 transition-fast-out bg-black v-card--reveal"
                                        style="height: 100%"
                                    >
                                        <v-card
                                            class="mt-n11 w-100 h-25"
                                            style="
                                                background-color: #0d47a1;
                                                color: white;
                                                padding-top: 15px;
                                                border-radius: 0 0 10px 10px;
                                            "
                                        >
                                            <h2>2-way Promo SG-Genting</h2>
                                        </v-card>
                                        <h2
                                            style="
                                                color: yellow;
                                                margin-top: 30px;
                                            "
                                        >
                                            10% OFF
                                        </h2>
                                        <h4>
                                            Travel to Genting Highlands with
                                            KKKL
                                        </h4>

                                        <v-btn
                                            class="mt-5"
                                            style="
                                                border-radius: 30px;
                                                border: 2px solid white;
                                                opacity: 1;
                                            "
                                            color="error"
                                        >
                                            Book Now
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-slide-group-item>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }">
                        <v-slide-group-item v-slot="{ toggle }">
                            <v-card
                                class="d-flex"
                                :class="['ma-3']"
                                height="250"
                                @click="toggle"
                                v-bind="props"
                            >
                                <img
                                    src="https://cdn.busonlineticket.com/images/2021/03/Refund-Protect-BOT-Care-min.jpg"
                                    alt=""
                                />
                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        align="center"
                                        class="d-flex flex-column mt-10 transition-fast-out bg-black v-card--reveal"
                                        style="height: 100%"
                                    >
                                        <v-card
                                            class="mt-n5 w-100 h-25"
                                            style="
                                                background-color: #0d47a1;
                                                color: white;
                                                padding-top: 15px;
                                                border-radius: 0 0 10px 10px;
                                            "
                                        >
                                            <h2>100% Refundable</h2>
                                        </v-card>
                                        <h2
                                            style="
                                                color: yellow;
                                                margin-top: 30px;
                                            "
                                        >
                                            Refund Protect
                                        </h2>
                                        <h4 style="padding: 0 30px">
                                            You can get 100% Refund when you
                                            cancel booking for special
                                            circumstances.
                                        </h4>

                                        <v-btn
                                            class="mt-5"
                                            style="
                                                border-radius: 30px;
                                                border: 2px solid white;
                                                opacity: 1;
                                            "
                                            color="error"
                                        >
                                            Learn More
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-slide-group-item>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }">
                        <v-slide-group-item v-slot="{ toggle }">
                            <v-card
                                class="d-flex"
                                :class="['ma-3']"
                                height="250"
                                @click="toggle"
                                v-bind="props"
                            >
                                <img
                                    src="https://cdn.busonlineticket.com/images/2022/07/BOT-New-Member-Promo_EN.jpg"
                                    alt=""
                                />
                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        align="center"
                                        class="d-flex flex-column mt-10 transition-fast-out bg-black v-card--reveal"
                                        style="height: 100%"
                                    >
                                        <v-card
                                            class="mt-n5 w-100 h-25"
                                            style="
                                                background-color: #0d47a1;
                                                color: white;
                                                padding-top: 15px;
                                                border-radius: 0 0 10px 10px;
                                            "
                                        >
                                            <h2>New Member Exclusive</h2>
                                        </v-card>
                                        <h2
                                            style="
                                                color: yellow;
                                                margin-top: 30px;
                                            "
                                        >
                                            50% Offer
                                        </h2>
                                        <h4>
                                            Sign up as member and enjoy up to
                                            50% Offer on your first booking!
                                        </h4>

                                        <v-btn
                                            class="mt-5"
                                            style="
                                                border-radius: 30px;
                                                border: 2px solid white;
                                                opacity: 1;
                                            "
                                            color="error"
                                        >
                                            Learn More
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-slide-group-item>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }">
                        <v-slide-group-item v-slot="{ toggle }">
                            <v-card
                                class="d-flex"
                                :class="['ma-3']"
                                height="250"
                                @click="toggle"
                                v-bind="props"
                            >
                                <img
                                    src="https://cdn.busonlineticket.com/images/2021/03/Refund-Protect-BOT-Care-min.jpg"
                                    alt=""
                                />
                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        align="center"
                                        class="d-flex flex-column mt-10 transition-fast-out bg-black v-card--reveal"
                                        style="height: 100%"
                                    >
                                        <v-card
                                            class="mt-n5 w-100 h-25"
                                            style="
                                                background-color: #0d47a1;
                                                color: white;
                                                padding-top: 15px;
                                                border-radius: 0 0 10px 10px;
                                            "
                                        >
                                            <h2>100% Refundable</h2>
                                        </v-card>
                                        <h2
                                            style="
                                                color: yellow;
                                                margin-top: 30px;
                                            "
                                        >
                                            Refund Protect
                                        </h2>
                                        <h4 style="padding: 0 30px">
                                            You can get 100% Refund when you
                                            cancel booking for special
                                            circumstances.
                                        </h4>

                                        <v-btn
                                            class="mt-5"
                                            style="
                                                border-radius: 30px;
                                                border: 2px solid white;
                                                opacity: 1;
                                            "
                                            color="error"
                                        >
                                            Learn More
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-slide-group-item>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }">
                        <v-slide-group-item v-slot="{ toggle }">
                            <v-card
                                class="d-flex"
                                :class="['ma-3']"
                                height="250"
                                @click="toggle"
                                v-bind="props"
                            >
                                <img
                                    src="https://cdn.busonlineticket.com/images/2022/07/BOT-New-Member-Promo_EN.jpg"
                                    alt=""
                                />
                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        align="center"
                                        class="d-flex flex-column mt-10 transition-fast-out bg-black v-card--reveal"
                                        style="height: 100%"
                                    >
                                        <v-card
                                            class="mt-n5 w-100 h-25"
                                            style="
                                                background-color: #0d47a1;
                                                color: white;
                                                padding-top: 15px;
                                                border-radius: 0 0 10px 10px;
                                            "
                                        >
                                            <h2>New Member Exclusive</h2>
                                        </v-card>
                                        <h2
                                            style="
                                                color: yellow;
                                                margin-top: 30px;
                                            "
                                        >
                                            50% Offer
                                        </h2>
                                        <h4>
                                            Sign up as member and enjoy up to
                                            50% Offer on your first booking!
                                        </h4>

                                        <v-btn
                                            class="mt-5"
                                            style="
                                                border-radius: 30px;
                                                border: 2px solid white;
                                                opacity: 1;
                                            "
                                            color="error"
                                        >
                                            Learn More
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-slide-group-item>
                    </v-hover>

                    <v-hover v-slot="{ isHovering, props }">
                        <v-slide-group-item v-slot="{ toggle }">
                            <v-card
                                class="d-flex"
                                :class="['ma-3']"
                                height="250"
                                @click="toggle"
                                v-bind="props"
                            >
                                <img
                                    src="https://cdn.busonlineticket.com/images/2023/03/Awal-Ramadhan-Promo_RotatingBanner_EN.jpg"
                                    alt=""
                                />

                                <v-expand-transition>
                                    <div
                                        v-if="isHovering"
                                        align="center"
                                        class="d-flex flex-column mt-10 transition-fast-out bg-black v-card--reveal"
                                        style="height: 100%"
                                    >
                                        <v-card
                                            class="mt-n11 w-100 h-25"
                                            style="
                                                background-color: #0d47a1;
                                                color: white;
                                                padding-top: 15px;
                                                border-radius: 0 0 10px 10px;
                                            "
                                        >
                                            <h2>
                                                Celebrate Ramadhan with your
                                                loved...
                                            </h2>
                                        </v-card>
                                        <h2
                                            style="
                                                color: yellow;
                                                margin-top: 30px;
                                            "
                                        >
                                            20% * OFF
                                        </h2>
                                        <h4>Valid for selected trips only</h4>

                                        <v-btn
                                            class="mt-5"
                                            style="
                                                border-radius: 30px;
                                                border: 2px solid white;
                                                opacity: 1;
                                            "
                                            color="error"
                                        >
                                            Learn More
                                        </v-btn>
                                    </div>
                                </v-expand-transition>
                            </v-card>
                        </v-slide-group-item>
                    </v-hover>
                </v-slide-group>
            </v-sheet>
        </v-row>
    </v-container>

    <v-card style="height: 500px" color="blue-grey-lighten-5" class="mt-5">
        <v-container class="mt-10" align="center">
            <v-row dense justify="center">
                <v-col cols="4">
                    <h3><span style="color: blue">Popular</span> Bus Route</h3>
                    <div
                        class="text-left pl-16 ml-16 mt-3"
                        style="font-size: 15px; cursor: pointer"
                    >
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Bus from Kuala Lumpur to Malacca
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Bus from Kuala Lumpur to Johor Bahru
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Bus from Kuala Lumpur to Ipoh
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Bus from Kuala Lumpur to Kota Bharu
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Bus from Kuala Lumpur to K.Terengganu
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Bus from Kuala Lumpur to Seremban
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Bus from Kuala Lumpur to Alor Setar
                        </v-list-item>
                    </div>

                    <!-- <v-btn class="mt-4" style="border-radius: 25px;">Most Popular Bus Routes</v-btn> -->
                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn
                                style="border-radius: 25px; width: 230px"
                                class="hoverbtn mt-4"
                                v-bind="props"
                                :color="
                                    isHovering ? 'white' : 'light-blue-darken-4'
                                "
                            >
                                Most Popular Bus Routes
                            </v-btn>
                        </template>
                    </v-hover>
                </v-col>

                <v-col cols="4">
                    <h3>
                        <span style="color: blue">Popular</span> Train Route
                    </h3>
                    <div
                        class="text-left ml-16 pl-16 mt-3"
                        style="font-size: 15px; cursor: pointer"
                    >
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Train from Kuala Lumpur to Ipoh
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Train from Kuala Lumpur to Butterworth
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Train from Kuala Lumpur to Alor Setar
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Train from Kuala Lumpur to Sungai Petani
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Train from Kuala Lumpur to Gemas
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Train from Kuala Lumpur to Batu Gajah
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Train from Kuala Lumpur to Bukit Mertajam
                        </v-list-item>
                    </div>

                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn
                                style="border-radius: 25px; width: 230px"
                                class="hoverbtn mt-4"
                                v-bind="props"
                                :color="
                                    isHovering ? 'white' : 'light-blue-darken-4'
                                "
                            >
                                Most Popular Train Routes
                            </v-btn>
                        </template>
                    </v-hover>
                </v-col>

                <v-col cols="4">
                    <h3>
                        <span style="color: blue">Popular</span> Furry Route
                    </h3>
                    <div
                        class="text-left ml-16 pl-16 mt-3"
                        style="font-size: 15px; cursor: pointer"
                    >
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Ferry from Mersing to Tioman Island
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Ferry from Tg. Gemok to Tioman Island
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Ferry from Kuala Besut to Perhentian Island
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Ferry from Penang to Langkawi
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Ferry from Marina South Pier to St John Island
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Ferry from Marina South Pier to Kusu Island
                        </v-list-item>
                        <v-list-item>
                            <v-icon
                                icon="mdi-menu-right"
                                style="color: blue"
                            ></v-icon
                            >Ferry from Kuala Besut to Perhentian Island
                        </v-list-item>
                    </div>

                    <v-hover>
                        <template v-slot:default="{ isHovering, props }">
                            <v-btn
                                style="border-radius: 25px; width: 230px"
                                class="hoverbtn mt-4"
                                v-bind="props"
                                :color="
                                    isHovering ? 'white' : 'light-blue-darken-4'
                                "
                            >
                                Most Popular Ferry Routes
                            </v-btn>
                        </template>
                    </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </v-card>

    <v-card>
        <v-container class="mt-10 d-flex justify-center">
            <v-row dense justify="center">
                <v-col cols="5">
                    <v-img
                        height="300"
                        class="mt-n5"
                        src="https://resource.busonlineticket.com/images/2022/05/Travel-with-BOT-in-Malaysia-Singapore-min.png"
                    >
                    </v-img>
                </v-col>

                <v-col cols="5" class="text-justify mt-n9">
                    <v-list-item
                        style="font-size: 20px"
                        color="indigo-accent-4"
                        class="mt-5 font-weight-bold"
                    >
                        Travelling by Bus, Train and Ferry in Malaysia and
                        Singapore
                    </v-list-item>
                    <v-list-item
                        style="font-size: 15px"
                        color="indigo-darken-4"
                        class="mt-5"
                    >
                        Looking for an online booking portal to book a bus,
                        train or ferry tickets to travel in Malaysia and
                        Singapore? You have come to the right place! Malaysia
                        and Singapore are among the top countries in Southeast
                        Asia with an established tourism industry.
                    </v-list-item>

                    <v-list-item color="indigo-darken-4" class="mt-5">
                        Apart from the developing and maintaining various
                        attractions all over the countries, Malaysia tourism and
                        Singapore tourism also encourage the expansion of the
                        public transportation system in their respective
                        countries. The comprehensive public transportation
                        coverage in Malaysia and Singapore such as express
                        buses, trains and ferries makes travelling in these two
                        countries extremely easy.
                    </v-list-item>
                </v-col>
            </v-row>
        </v-container>
    </v-card>

    <v-container
        fluid
        class="bg-blue-accent-4"
        align="center"
        style="height: 360px"
    >
        <v-row dense justify="center">
            <v-col cols="4" class="text-justify mt-6">
                <v-list-item style="font-weight: bold; font-size: 25px">
                    How We Can Make It Easier For You?
                </v-list-item>

                <v-list-item style="font-size: 15px">
                    BusOnlineTicket.com aims to make your journeys even easier
                    by providing a one-stop online booking portal for an express
                    bus, train and ferry tickets in Malaysia and Singapore. With
                    our service, you can book bus ticket online in Malaysia and
                    Singapore, KTM online tickets including ETS train tickets,
                    and even make advance ferry booking online.
                    <br /><br />Download Our Apps
                </v-list-item>

                <v-row justify="start" class="mt-1 ml-1">
                    <img
                        height="80"
                        width="200"
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        alt=""
                    />
                    <img
                        height="80"
                        width="200"
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        alt=""
                    />
                    <img
                        height="80"
                        width="200"
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        alt=""
                    />
                </v-row>
            </v-col>

            <v-col cols="4">
                <v-img
                    class="mt-n8"
                    height="408px"
                    width="420px"
                    src="https://cdn.busonlineticket.com/images/2022/02/Hand-Holding-Phone-4-w-500-min.png"
                ></v-img>
            </v-col>
        </v-row>
    </v-container>

    <v-card style="height: 250px" color="blue-grey-lighten-5">
        <v-container style="height: 250px" align="center">
            <v-row justify="center">
                <v-col cols="9">
                    <v-list-item
                        style="font-size: 15px"
                        color="indigo-darken-4"
                    >
                        <h2 class="mt-10" color="blue">Loyalty Program</h2>
                        <br />
                    </v-list-item>

                    <v-list-item color="indigo-darken-4">
                        <div>
                            <i style="color: blue">Frequent traveler?</i> &nbsp;
                            We are happy to welcome you to join our Loyalty
                            Program. With our Loyalty Program, you get to earn
                            BOT Miles every time you book with us and redeem the
                            points to cut off the price for your next purchase.
                            Everyone can join our Loyalty Program. All you have
                            to do is sign up and book bus tickets online, ETS
                            train tickets and KTM online or make a ferry booking
                            at BusOnlineTicket.com. Join our Loyalty Program for
                            free and enjoy the extra benefits of online booking
                            at BusOnlineTicket.com.
                        </div>
                    </v-list-item>
                </v-col>
            </v-row>
        </v-container>
    </v-card>

    <v-container align="center">
        <v-row justify="center" dense>
            <v-col cols="5">
                <v-img
                    width="350"
                    height="250"
                    class="mt-10"
                    src="https://resource.busonlineticket.com/images/2022/05/Benefits-of-Booking-Online-02-min.png"
                ></v-img>
            </v-col>

            <v-col cols="5" class="text-left mt-5">
                <v-list-item
                    style="font-weight: bold; font-size: 20px"
                    color="indigo-accent-4"
                >
                    Benefits of Online Booking vs. Buying Your Ticket at the
                    Counter
                </v-list-item>

                <v-list-item style="font-size: 15px">
                    <p>
                        One of the ultimate benefits when you book bus ticket
                        online, or KTM/ETS train tickets or ferry tickets is you
                        can book in advance from anywhere and whenever you want.
                        This is especially useful for tourists and for those
                        with difficulties to access the bus terminal, train
                        station or ferry ticket counter. Instead, you can save
                        the cost and time going to the stations and terminals to
                        buy the tickets.
                    </p>
                    <br />
                    <p>
                        We offer various secured payment options including
                        e-wallet, credit cards, debit cards, internet banking,
                        Alipay and many more for your convenience. Say no more
                        long queues and avoid disappointment of tickets being
                        sold out when you book your bus, train and ferry tickets
                        in advance online.
                    </p>
                </v-list-item>
            </v-col>
            <center>
                <h2 style="margin-top: 30px">
                    Start Booking With
                    <a href="#" style="color: blue">BusOnlineTicket.com</a>
                    Today!
                </h2>
            </center>
        </v-row>
    </v-container>

    <v-card color="blue-grey-lighten-5" class="mt-7" height="170">
        <v-container justify="center" align="center">
            <v-row justify="center">
                <v-list-item
                    style="font-size: 15px; letter-spacing: 1px"
                    class="mt-5 font-weight-bold"
                    color="#868686"
                >
                    WE ACCEPT</v-list-item
                >
            </v-row>

            <v-row
                justify="center"
                style="display: flex; gap: 25px"
                align="center"
                class="mt-5"
            >
                <img
                    width="50"
                    height="20"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-visa.png"
                    alt=""
                />
                <img
                    width="40"
                    height="20"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-mastercard.png"
                    alt=""
                />
                <img
                    width="50"
                    height="30"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-pay-now.png"
                    alt=""
                />
                <img
                    width="70"
                    height="25"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-paypal.png"
                    alt=""
                />
                <img
                    width="70"
                    height="20"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-grap-pay.png"
                    alt=""
                />
                <img
                    width="30"
                    height="30"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-tng-ewallet.png"
                    alt=""
                />
                <img
                    width="60"
                    height="20"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-boost.png"
                    alt=""
                />
                <img
                    width="70"
                    height="20"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-setel.png"
                    alt=""
                />
                <img
                    width="60"
                    height="30"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-shopee-pay.png"
                    alt=""
                />
                <img
                    width="40"
                    height="20"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-maybank2u.png"
                    alt=""
                />
                <img
                    width="30"
                    height="30"
                    src="https://cdn.busonlineticket.com/images/2022/05/icon-cimb-1-1.jpg"
                    alt=""
                />
                <img
                    width="30"
                    height="30"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-hlb.jpg"
                    alt=""
                />
                <img
                    width="50"
                    height="20"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-rhb.png"
                    alt=""
                />
                <img
                    width="40"
                    height="30"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-alliance-bank.png"
                    alt=""
                />
                <img
                    width="40"
                    height="30"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-unionpay.jpg"
                    alt=""
                />
                <img
                    width="70"
                    height="20"
                    src="https://cdn.busonlineticket.com/images/2023/02/logo-alipay.png"
                    alt=""
                />
            </v-row>
        </v-container>
    </v-card>

    <v-card class="seleabcolorbg" height="500">
        <v-container align="center">
            <v-row justify="center" class="mt-10">
                <v-col cols="2">
                    <h3
                        class="text-left text-uppercase"
                        style="font-size: 15px; color: white"
                    >
                        Information
                    </h3>
                    <div
                        class="text-left mt-3 ml-n6"
                        style="font-size: 15px; cursor: pointer"
                    >
                        <v-list-item>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter">Home</a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter">About Us </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Bus Operators </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Bus Terminal </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Bus Route </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Train Route </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Ferry Route </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Latest Poromotion </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Loyalty Program </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Affiltrate Program </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Agent Registration </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Travel Tips </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Destinations </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Contact Us </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Sitemap </a>
                            </div>
                        </v-list-item>
                    </div>
                </v-col>

                <v-col cols="2">
                    <h3
                        class="text-left text-uppercase"
                        style="font-size: 15px; color: white"
                    >
                        Our Offers
                    </h3>
                    <div
                        class="text-left mt-3 ml-n6"
                        style="font-size: 15px; cursor: pointer"
                    >
                        <v-list-item>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter">Bus Tickets</a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter">Bus + Hotel </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Train Tickets </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Ferry Tickets </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Tours Attraction </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Bus Charter </a>
                            </div>
                        </v-list-item>
                    </div>
                    <br />

                    <h3
                        class="text-left text-uppercase"
                        style="font-size: 15px; color: white"
                    >
                        Global
                    </h3>
                    <div
                        class="text-left mt-3 ml-n2"
                        style="font-size: 15px; cursor: pointer"
                    >
                        <v-icon
                            icon="mdi-menu-right"
                            style="color: white"
                        ></v-icon>
                        <a class="hoverfooter"> Thailand Booking Site </a>
                    </div>
                </v-col>

                <v-col cols="2">
                    <h3
                        class="text-left text-uppercase"
                        style="font-size: 15px; color: white"
                    >
                        booking guide
                    </h3>
                    <div
                        class="text-left mt-3 ml-n6"
                        style="font-size: 15px; cursor: pointer"
                    >
                        <v-list-item>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter">Booking FAQ</a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter">How to Book </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Trip Duration </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Manage My Booking </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> BOT Miles Guide </a>
                            </div>
                            <div>
                                <v-icon
                                    icon="mdi-menu-right"
                                    style="color: white"
                                ></v-icon>
                                <a class="hoverfooter"> Payment Guide </a>
                            </div>
                        </v-list-item>
                    </div>
                </v-col>

                <v-col cols="2">
                    <h3
                        class="text-left text-uppercase"
                        style="font-size: 15px; color: white"
                    >
                        Find Us
                    </h3>
                    <div class="text-left mt-3 ml-n4" style="font-size: 15px">
                        <v-list-item class="mt-6" color="white">
                            <div>MALAYSIA</div>
                            <div>VO3-11-19, Designer Office (VO3),</div>
                            <div>Lingkaran SV, Sunway Velocity,</div>
                            <div>55100 Kuala Lumpur</div>
                        </v-list-item>
                        <v-list-item class="mt-6" color="white">
                            <div>SINGAPORE</div>
                            <div>Lazada One, 5One Central,</div>
                            <div>51 Bras Basah Rd, #06-01</div>
                            <div>Singapore 189554</div>
                        </v-list-item>
                    </div>
                </v-col>

                <v-col cols="2">
                    <v-img
                        src="https://cdn.busonlineticket.com/images/2022/05/Logo-01.png"
                    ></v-img>
                    <div
                        class="text-center mt-3 ml-n4"
                        style="font-size: 15px; color: white; cursor: pointer"
                    >
                        <v-list-item class="mt-10">
                            <i> <b>Download</b> FREE </i> <br />
                            <i> BusOnlineTicket Apps Now </i>
                        </v-list-item>
                    </div>

                    <div class="d-flex flex-wrap">
                        <v-img
                            width="50"
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        ></v-img>
                        <v-img
                            width="50"
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        ></v-img>
                        <br />
                    </div>

                    <div class="d-flex flex-wrap">
                        <v-img
                            height="60"
                            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        ></v-img>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-card>

    <v-footer color="#00589f" height="300">
        <v-container class="mt-2">
            <v-row dense justify="center">
                <v-col cols="6" class="mt-2">
                    <div style="color: white; font-size: 14px">
                        Copyright © 2016 - 2030 by BusOnlineTicket.com Privacy
                        Policy All Rights Reserved
                    </div>
                </v-col>

                <v-col cols="4">
                    <div style="display: flex; gap: 10px">
                        <v-icon
                            color="indigo-darken-4"
                            icon="mdi-facebook"
                            style="
                                font-size: 20px;
                                border-radius: 50%;
                                width: 35px;
                                height: 35px;
                                background-color: white;
                            "
                        ></v-icon>
                        <v-icon
                            color="indigo-darken-4"
                            icon="mdi-twitter"
                            style="
                                font-size: 20px;
                                border-radius: 50%;
                                width: 35px;
                                height: 35px;
                                background-color: white;
                            "
                        ></v-icon>
                        <v-icon
                            color="indigo-darken-4"
                            icon="mdi-youtube"
                            style="
                                font-size: 20px;
                                border-radius: 50%;
                                width: 35px;
                                height: 35px;
                                background-color: white;
                            "
                        ></v-icon>
                        <v-icon
                            color="indigo-darken-4"
                            icon="mdi-instagram"
                            style="
                                font-size: 20px;
                                border-radius: 50%;
                                width: 35px;
                                height: 35px;
                                background-color: white;
                            "
                        ></v-icon>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>








<script>
    export default {
        data: () => ({
            language: [{ title: "ENG" }, { title: "MLY" }, { title: "TH" }],

            text: "center",

            monies: [
                { luy: "Malaysia Ringgit(RM)" },
                { luy: "Singapure Dollar(S$)" },
                { luy: "Indonesia Ruppiah (Rp)" },
            ],

            cardimgs: [
                {
                    img: "https://cdn.busonlineticket.com/images/2022/07/BOT-New-Member-Promo_EN.jpg",
                },
                {
                    img: "https://cdn.busonlineticket.com/images/2023/03/Awal-Ramadhan-Promo_RotatingBanner_EN.jpg",
                },
                {
                    img: "https://cdn.busonlineticket.com/images/2023/02/POP-rotating-banner-EN.png",
                },
                {
                    img: "https://cdn.busonlineticket.com/images/2023/03/Awal-Ramadhan-Promo_RotatingBanner_EN.jpg",
                },
                {
                    img: "https://cdn.busonlineticket.com/images/2023/02/POP-rotating-banner-EN.png",
                },
                {
                    img: "https://cdn.busonlineticket.com/images/2023/03/KKKL_SingaporeGenting_RotatingBanner-2.png",
                },
                {
                    img: "https://cdn.busonlineticket.com/images/2023/02/POP-rotating-banner-EN.png",
                },
                {
                    img: "https://cdn.busonlineticket.com/images/2023/03/KKKL_SingaporeGenting_RotatingBanner-2.png",
                },
                {
                    img: "https://cdn.busonlineticket.com/images/2021/03/Refund-Protect-BOT-Care-min.jpg",
                },
                {
                    img: "https://cdn.busonlineticket.com/images/2023/03/KKKL_SingaporeGenting_RotatingBanner-2.png",
                },
                {
                    img: "https://cdn.busonlineticket.com/images/2021/03/Refund-Protect-BOT-Care-min.jpg",
                },
                {
                    img: "https://cdn.busonlineticket.com/images/2022/07/BOT-New-Member-Promo_EN.jpg",
                },
                {
                    img: "https://cdn.busonlineticket.com/images/2021/03/Refund-Protect-BOT-Care-min.jpg",
                },
                {
                    img: "https://cdn.busonlineticket.com/images/2022/07/BOT-New-Member-Promo_EN.jpg",
                },
                {
                    img: "https://cdn.busonlineticket.com/images/2023/03/Awal-Ramadhan-Promo_RotatingBanner_EN.jpg",
                },
            ],

            slideimg: [
                "https://www.busonlineticket.com/wp-content/uploads/2022/04/HP-Insurance-1.png",
                "https://www.busonlineticket.com/wp-content/uploads/2022/04/HP-BOT-GoFlexi-1.jpg",
                "https://www.busonlineticket.com/wp-content/uploads/2022/04/New-Homepage_Member-Benefits-min-1.png",
            ],

            model: null,

            origin: [
                "Cameron Highland",
                "Johor Barou",
                "kuala Lumpur",
                "Malaca",
                "Penang",
                "Singapore",
                "Bangda Seri",
            ],

            cardslides: [
                { title: "Kuala Lumpure to Johor bahru", cate: "RM 35" },
                { title: "Kuantan to Kuala Lumpure", cate: "RM 19" },
                { title: "Kuala Lumpure to Cameron Highlands", cate: "RM 38" },
                { title: "Malaca to Johor Bahru", cate: "RM 20" },
                { title: "TBS to Penang Sentral", cate: "RM 28" },
                { title: "Kuala Lumpure to Batu Pahat", cate: "RM 23" },
            ],
        }),
    };
</script>


<style scoped>
.logoimg {
    width: 300px;
    height: 30px;
}

.angle-down {
    color: white;
    font-size: 25px;
}

.normaltxt {
    font-weight: normal;
}

.left {
    margin-left: 100px;
}

.hoverbtn {
    transition: all 0.3s;
    text-transform: capitalize;
    font-weight: normal;
}

.headercolor {
    background-color: rgb(33, 46, 69);
}

a {
    color: white;
    text-decoration: none;
}

.v-card--reveal {
    align-items: center;
    bottom: 0px;
    justify-content: center;
    opacity: 0.9;
    position: absolute;
    width: 100%;
}

.seleabcolorbg {
    background-color: #079acd;
}

.hoverfooter:hover {
    text-decoration: underline;
}

.wrap-fixed__menu {
    display: flex;
    gap: 5px;
    flex-direction: column;
    z-index: 7;
    position: fixed;
    margin-top: 200px;
}
.fixed-menu {
    background-color: #ffb226;
    border-radius: 0 20px 20px 0;
    width: 45px;
    height: 45px;
    padding: 8px 15px;
    border: 3px solid white;
    border-left: 0;
    display: flex;
}
h5 {
    display: none;
    margin-left: 10px;
    color: white;
    text-transform: capitalize;
    font-weight: normal;
    font-size: 15px;
}

.fixed-menu:hover {
    width: auto;
}
.fixed-menu:hover h5 {
    display: block;
}
</style>

<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
            class="btn btn-link"
            >Show</router-link
          >

          <router-link
            :to="{
              name: 'admin-restaurant-edit',
              params: { id: restaurant.id },
            }"
            class="btn btn-link"
            >Edit</router-link
          >

          <button
            @click.prevent.stop="deleteRestaurant(restaurant.id)"
            type="button"
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Ned Trantow",
      tel: "670-353-6941 x75169",
      address: "234 Abernathy Forge",
      opening_hours: "08:00",
      description: "quia",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.06157333984635",
      viewCounts: 1,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-23T10:00:06.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 2,
      name: "Jamison Koch",
      tel: "1-486-520-8411",
      address: "8612 Hammes Courts",
      opening_hours: "08:00",
      description: "Et est soluta corporis et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.5564786727356",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 3,
      name: "Charlene Okuneva",
      tel: "798-637-0710 x04473",
      address: "89319 Naomie Prairie",
      opening_hours: "08:00",
      description:
        "Cupiditate at perferendis.\nCulpa enim autem dolorem.\nVoluptatem et et omnis consequuntur quos dolorum ea.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.599372792839098",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 4,
      name: "Leonora Nader",
      tel: "756.997.8432 x56792",
      address: "1218 Rath Point",
      opening_hours: "08:00",
      description:
        "Qui eos nisi eos et eum et.\nVoluptas quia earum quasi nisi quae.\nEt autem similique vitae laudantium est ipsa.\nQuisquam dolorem aperiam.\nIpsum omnis unde rerum modi dicta neque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=6.336431227834671",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 5,
      name: "Josefa Schuster",
      tel: "468-807-2801 x9999",
      address: "395 Kayleigh Summit",
      opening_hours: "08:00",
      description:
        "Corrupti necessitatibus quos officia et expedita. Et provident qui. Pariatur est ad sed nihil ex minima pariatur. Voluptatem voluptas mollitia ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=95.0374425882853",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 6,
      name: "Cayla Spencer",
      tel: "1-935-304-5033",
      address: "954 Lora Roads",
      opening_hours: "08:00",
      description:
        "Error qui eligendi id. Beatae aperiam consectetur itaque soluta qui. Pariatur est laborum eum et. Voluptatem reiciendis sint libero vero non iste nostrum. Id impedit non iure eum itaque quidem tenetur consequatur. Modi id modi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.2555578599867",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 7,
      name: "Adrienne Pfannerstill DDS",
      tel: "317.855.4742 x2309",
      address: "07931 Winona Summit",
      opening_hours: "08:00",
      description:
        "Ut officia praesentium fuga. Voluptates qui tempore facilis rerum ut expedita eum quia ut. Magnam itaque iure dolores molestiae iste et. Debitis libero quo autem quae molestiae quisquam eaque. Ut inventore maiores provident dolorum maiores deserunt molestiae.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.15912284713387",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 8,
      name: "Vernon Lind",
      tel: "1-533-679-6442 x53387",
      address: "4739 Jovan Mission",
      opening_hours: "08:00",
      description:
        "Nulla dolore vel quis veniam fuga et autem rerum est. Veniam architecto commodi omnis dolor quibusdam architecto nulla maxime. Mollitia nobis quaerat soluta aut enim fugiat eum voluptatem. Possimus praesentium qui accusamus placeat amet. Recusandae ratione delectus sunt incidunt ducimus commodi quisquam molestiae. Blanditiis nulla accusamus voluptas quibusdam et nihil.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.28278118711734",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 9,
      name: "Zane Bechtelar",
      tel: "1-189-181-6496 x457",
      address: "62857 Demarco Harbor",
      opening_hours: "08:00",
      description: "cumque",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.375800191064638",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 10,
      name: "Eli Schumm",
      tel: "246-389-6997",
      address: "5637 Stehr Valley",
      opening_hours: "08:00",
      description:
        "Sapiente perspiciatis et expedita dolorem reiciendis alias.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.784620734728104",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 11,
      name: "Malcolm Wilderman",
      tel: "229.278.4087 x126",
      address: "57994 Leone Wall",
      opening_hours: "08:00",
      description: "praesentium",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=65.259346074852",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 12,
      name: "Miss Alysson Walsh",
      tel: "1-272-568-2755 x1107",
      address: "31479 Brakus Ridges",
      opening_hours: "08:00",
      description: "in",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=42.927656628866664",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 13,
      name: "Darby Bayer III",
      tel: "(963) 275-4022",
      address: "7382 Adolf Street",
      opening_hours: "08:00",
      description:
        "Et inventore omnis molestiae dolorem ut et sequi alias nam.\nQuia ipsam quam molestias quibusdam omnis.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=82.5074051459504",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 14,
      name: "Vicente Koss",
      tel: "(831) 106-4234 x548",
      address: "762 Hoeger Oval",
      opening_hours: "08:00",
      description: "Qui et eum ut sed earum nam dolorum repudiandae ut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.79405824637153",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 15,
      name: "Kaela Hettinger Jr.",
      tel: "148.598.1586",
      address: "09774 Mabel Plaza",
      opening_hours: "08:00",
      description:
        "Perspiciatis quibusdam iusto.\nExplicabo qui ex aut assumenda et rerum voluptas.\nVoluptate et voluptatum atque officiis numquam.\nNeque non neque eos fuga ea enim placeat.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=10.505592891719285",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 16,
      name: "Mina Mills",
      tel: "(754) 018-9571 x9093",
      address: "8716 Ferne Wall",
      opening_hours: "08:00",
      description:
        "Ratione illum eligendi enim officiis non in. Voluptates eveniet hic ut consequatur minus nulla esse et necessitatibus. Quibusdam voluptatibus consectetur voluptatem dolorum molestias. Esse tenetur asperiores officiis reiciendis ut cum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=27.47661954114986",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 17,
      name: "Nicholaus Flatley",
      tel: "585-278-8690",
      address: "29873 Doyle Motorway",
      opening_hours: "08:00",
      description:
        "Saepe provident fugiat dolorem eaque vero facilis natus dolor. Amet odit quis placeat. Qui quia deleniti. Quis minima officiis. Aut laboriosam vero. Suscipit est et minima ratione earum et est.\n \rQuisquam temporibus error laboriosam. Molestiae libero ab iusto et est eos doloribus quisquam. Inventore nihil perspiciatis molestias. Repudiandae quibusdam neque dolorum voluptas.\n \rEos autem mollitia optio natus veniam. Laboriosam corporis officiis assumenda aut ut eos et voluptatem in. Ea recusandae temporibus at quod. Est animi suscipit doloremque voluptas hic. Voluptas mollitia sed qui velit repellendus autem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=29.75299608264159",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 18,
      name: "Dr. Dariana Pfeffer",
      tel: "(476) 415-8734",
      address: "708 Alexane Avenue",
      opening_hours: "08:00",
      description:
        "Et eaque qui numquam. Eius quasi tempore facilis rem. Aut aut sed dicta illum aperiam temporibus.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=17.267357155404174",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 19,
      name: "Krista Howell II",
      tel: "1-696-906-5373 x23841",
      address: "1156 Joanne Hollow",
      opening_hours: "08:00",
      description: "accusantium excepturi sunt",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.95774034714287",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 20,
      name: "Tamia Stehr",
      tel: "(785) 102-1749",
      address: "2544 Delia Rue",
      opening_hours: "08:00",
      description:
        "Ratione maiores autem possimus aut inventore eaque delectus in. Quo minus quam et aperiam neque iusto libero quis. Praesentium voluptatibus dignissimos odit dolor. Quis eos quis atque eveniet culpa ex eos totam corporis. Ut et voluptatem et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.52401825333159",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 21,
      name: "Chandler McGlynn DDS",
      tel: "030-665-6872",
      address: "38412 Quigley View",
      opening_hours: "08:00",
      description:
        "Cum sint consequatur. Ducimus impedit qui qui vel. Suscipit aut quo itaque culpa nihil debitis vel. Eveniet soluta aliquid quo et ad. Soluta aut autem error dolores et consequuntur culpa omnis.\n \rReprehenderit consectetur fugiat quos. Dolor et et et quia sequi aperiam facilis aut recusandae. Quis culpa id molestiae totam eum nisi ut.\n \rQuibusdam enim repellat et quia dicta fuga voluptatem quia rerum. Reiciendis voluptatum provident cum consectetur a sed tempora. Distinctio voluptas doloremque distinctio ut possimus sint. Aut et est quidem veritatis iure delectus maiores. In molestiae hic.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.267141749928485",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 22,
      name: "Valentina Weber",
      tel: "797-233-4750 x99516",
      address: "579 Waters Plaza",
      opening_hours: "08:00",
      description:
        "Excepturi incidunt eveniet voluptas et dolor enim voluptatum eligendi. Libero explicabo nostrum excepturi fugiat vero cum aspernatur voluptatem sit. Saepe nulla doloremque perspiciatis omnis atque vitae facere sed consequuntur. Voluptatem minima porro ad qui voluptatem aut.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=15.508434340533883",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 23,
      name: "Xzavier Witting",
      tel: "1-633-257-1929 x587",
      address: "48316 Rosamond Crest",
      opening_hours: "08:00",
      description: "Aut nobis vel sed est cumque.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.30988242431866",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 24,
      name: "Carlo Fritsch",
      tel: "(298) 945-3929 x9883",
      address: "0466 Dietrich Forks",
      opening_hours: "08:00",
      description: "totam a ut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.66854273876218",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 25,
      name: "Ashly Carter",
      tel: "088-356-2157 x718",
      address: "477 Mafalda Causeway",
      opening_hours: "08:00",
      description: "tempore",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=51.58888040712861",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 26,
      name: "Frida Bogan",
      tel: "090.776.5729 x2632",
      address: "1714 Rita Green",
      opening_hours: "08:00",
      description: "Soluta esse dolor voluptates.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.910795132644125",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 27,
      name: "Francisco O'Hara",
      tel: "509.950.4618 x918",
      address: "975 Mary Branch",
      opening_hours: "08:00",
      description:
        "Sunt natus ut consequuntur corporis voluptates. Sint voluptatem placeat impedit sunt autem provident. Vitae dolor et omnis. Et nobis earum praesentium quisquam. Laboriosam et natus ea.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.00056797687657",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 28,
      name: "Yasmine Leuschke",
      tel: "136-493-8243 x9394",
      address: "91284 Schinner Ridges",
      opening_hours: "08:00",
      description: "et",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=89.73694871037611",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 29,
      name: "Emile Morar",
      tel: "1-406-856-9717 x5639",
      address: "430 Zulauf Street",
      opening_hours: "08:00",
      description: "dolorum praesentium sint",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.0582497738975682",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 30,
      name: "Casandra Bogan",
      tel: "(117) 968-4880",
      address: "157 Cruickshank Rapid",
      opening_hours: "08:00",
      description: "quaerat",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=18.385332090022754",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 31,
      name: "Bethel Kihn",
      tel: "(105) 656-0921 x2930",
      address: "7816 Ward Oval",
      opening_hours: "08:00",
      description: "qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.2296110086682965",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 32,
      name: "Jerrod Toy Sr.",
      tel: "857-976-5826",
      address: "05532 Casper Wells",
      opening_hours: "08:00",
      description:
        "Tempora qui possimus dicta laudantium odio iure omnis quidem.\nNihil et ut ipsum quo.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.80027334987435",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 33,
      name: "Lindsey Hagenes",
      tel: "1-073-984-6457",
      address: "601 Nedra Pine",
      opening_hours: "08:00",
      description:
        "Reprehenderit cum odio aut facilis in magni fugiat natus. Aliquam enim voluptatum ducimus nesciunt dolores esse autem velit. Dicta alias nobis minus et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=96.57696440670665",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 34,
      name: "Jazmin Schinner",
      tel: "023-451-2586",
      address: "939 Merlin Centers",
      opening_hours: "08:00",
      description: "nesciunt",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=7.456962150877189",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 35,
      name: "Philip Sanford",
      tel: "414-239-5045 x59471",
      address: "848 Wisoky Cove",
      opening_hours: "08:00",
      description:
        "Iste ipsa aut nostrum ad vel voluptates quas quisquam. Sit dignissimos officia dolores. Voluptas corporis debitis quibusdam veritatis occaecati qui molestias reprehenderit. Laudantium est ipsam et rem et id quidem.\n \rQuos ab consequatur. Dolor quia vel occaecati quo. Commodi harum non distinctio non itaque reprehenderit rerum. Culpa nisi consectetur magnam magni voluptatem autem aut.\n \rRepudiandae nam distinctio saepe quia ducimus laborum nobis qui voluptatem. Asperiores autem eligendi aliquid. In enim libero et porro impedit. Consequatur dignissimos assumenda labore molestiae eum. Blanditiis ipsa eos ut illo magni laborum tenetur perspiciatis voluptates.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=47.26241076076296",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 36,
      name: "Katlyn Lubowitz III",
      tel: "296-602-5706 x5158",
      address: "927 Harrison Locks",
      opening_hours: "08:00",
      description:
        "Aliquam facilis nobis et. Doloribus doloribus dignissimos. Aliquam id et cupiditate voluptates quo fugit omnis. Modi repellat temporibus laborum.\n \rAspernatur qui qui quae. Et et natus neque occaecati eius odio earum. Molestias molestias omnis ipsa ipsum perferendis.\n \rIncidunt iste voluptatibus praesentium iste. Quas in minima ratione consequatur id. Ipsa et at autem saepe. Quia porro rem fuga doloribus distinctio suscipit sequi.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.8970283118966647",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 37,
      name: "Peter Boyle",
      tel: "1-148-091-3701",
      address: "05395 O'Reilly Corner",
      opening_hours: "08:00",
      description:
        "Dignissimos aperiam illo magnam qui quis mollitia officia modi.\nSoluta fugit aperiam ut deleniti in.\nQuos eos ut nisi dolor accusamus.\nAt architecto minus consequatur in quas facilis voluptas.\nEt dignissimos odit sed cumque et qui.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.83255116873585",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 38,
      name: "Edward Greenfelder",
      tel: "1-290-785-7361",
      address: "7812 Tabitha Center",
      opening_hours: "08:00",
      description: "Sequi quas non.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=50.14569243882663",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 39,
      name: "Carli Carroll",
      tel: "820.300.5410",
      address: "3449 Senger Trail",
      opening_hours: "08:00",
      description:
        "Qui voluptates excepturi praesentium quod rerum et omnis. Vitae nostrum facere. Magnam a iste. Est repellendus quasi sunt. Autem in enim eos aut non distinctio harum.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=54.27966237665218",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 40,
      name: "Willa Kovacek V",
      tel: "1-867-346-2572 x2775",
      address: "611 Desmond Harbors",
      opening_hours: "08:00",
      description: "dolores",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=78.68439361074316",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 41,
      name: "Mrs. Raina Lemke",
      tel: "(921) 006-8760 x8048",
      address: "030 Johathan Alley",
      opening_hours: "08:00",
      description: "odit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.78721170149429",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 42,
      name: "Jaycee Schumm",
      tel: "198.725.3836 x312",
      address: "7595 Briana Courts",
      opening_hours: "08:00",
      description: "Facilis accusantium dignissimos sint voluptas occaecati.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=28.588902939213078",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 43,
      name: "Yvonne Gutkowski",
      tel: "993-030-5467",
      address: "757 Deanna Meadow",
      opening_hours: "08:00",
      description: "numquam consequatur cupiditate",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.42951070419709",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 44,
      name: "Lukas Emard",
      tel: "(727) 119-8510 x0278",
      address: "953 Ward Vista",
      opening_hours: "08:00",
      description:
        "Nobis quia voluptatem itaque quia molestiae dolores in. Enim quia eum incidunt qui commodi tempora. Et necessitatibus et ut laborum voluptatem nisi et. Repellat beatae omnis ratione omnis animi odit. Assumenda libero ut minima. Doloribus dolor harum dicta.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=89.14670813468832",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 2,
      Category: {
        id: 2,
        name: "日本料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 45,
      name: "Yazmin Hilpert",
      tel: "(116) 160-0096",
      address: "025 Hackett Course",
      opening_hours: "08:00",
      description:
        "Ipsa magni voluptatem placeat. Et minus neque quo voluptate porro omnis voluptate aliquid. Delectus ratione laudantium possimus animi amet saepe.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=59.75626875593547",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 46,
      name: "Mary Zboncak",
      tel: "960-021-6990 x60664",
      address: "6190 Gino Burg",
      opening_hours: "08:00",
      description:
        "Recusandae sit molestiae dolores quisquam laborum at possimus consequuntur.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.5643976042338",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 47,
      name: "Gina Buckridge",
      tel: "582-363-5171 x393",
      address: "7151 Volkman Forges",
      opening_hours: "08:00",
      description: "Illum iste et ratione maiores illum a totam incidunt.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=93.18975199524498",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 48,
      name: "Jamarcus Mante DVM",
      tel: "528-739-7433",
      address: "497 Von Streets",
      opening_hours: "08:00",
      description:
        "Dignissimos eius ad id quis corrupti soluta ut iusto. Perferendis sed ut similique ab magni autem. Vel beatae dolores molestias vel et odit aut. Omnis sed dolores odio. Expedita dolor iure quibusdam saepe. Voluptatem dolorem consequuntur modi quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=92.25470067389956",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 49,
      name: "Loren Hettinger",
      tel: "476.997.0509 x4701",
      address: "3526 Jada Branch",
      opening_hours: "08:00",
      description: "est",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=40.49734611699005",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
    {
      id: 50,
      name: "Antwan Shanahan",
      tel: "388-093-2642 x6138",
      address: "443 Mortimer Turnpike",
      opening_hours: "08:00",
      description:
        "Exercitationem ea corporis tempora. Voluptas voluptatem consectetur nihil laboriosam fuga a molestiae est. Nesciunt a aut quidem ratione qui voluptatem.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=81.90819340660036",
      viewCounts: 0,
      createdAt: "2022-04-21T06:55:38.000Z",
      updatedAt: "2022-04-21T06:55:38.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-21T06:55:38.000Z",
        updatedAt: "2022-04-21T06:55:38.000Z",
      },
    },
  ],
};

export default {
  data() {
    return {
      restaurants: [],
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants;
    },

    deleteRestaurant(restaurantId) {
      this.restaurants = this.restaurants.filter(
        (restaurant) => restaurant.id !== restaurantId
      );
    },
  },
};
</script>
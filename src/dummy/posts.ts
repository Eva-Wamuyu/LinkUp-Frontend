import { Post } from "src/services/interfaces";

export const posts: Post[] = [
    {
      post_id: "86c84ab9-6e59-46a9-a93b-e6cd52a0a4bc",
      username: "mweld0",
      likes: 1,
      comments: 1,
      date: "4/26/2023",
      content: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      image_url: "http://dummyimage.com/147x100.png/cc0000/ffffff",
      image_url_user: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQ7xetZazndXzsY-Wos8xN576trcmTX8gHc3wunT8NOh6a03Svy2LrQhrMvV7NVzbEkyXliR9pSMbuwO_4",
    },
    {
      post_id: "be142245-b1bf-45b5-845c-42b42af05ffa",
      username: "tdannett1",
      likes: 2,
      comments: 2,
      date: "3/10/2023",
      content: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      image_url_user: "http://dummyimage.com/108x100.png/cc0000/ffffff",
      comments_list: [
        {
          comment_id: 1,
          content: "Great post!",
          created_at: "3/10/2023",
          username: "user1",
          has_liked: true,
          profile_image: "http://dummyimage.com/50x50.png/cc0000/ffffff",
          likes_count: 2
        },
        {
          comment_id: 2,
          content: "Thanks for sharing.",
          created_at: "3/10/2023",
          username: "user2",
          has_liked: false,
          profile_image: "http://dummyimage.com/50x50.png/cc0000/ffffff",
          likes_count: 3
        }
      ]
    },
    {
      post_id: "de616ece-e0a0-4d74-9d1a-41538fd6bb2d",
      username: "ndrover2",
      likes: 3,
      comments: 3,
      date: "4/14/2023",
      content: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      image_url: "http://dummyimage.com/183x100.png/dddddd/000000"
    },
    {
      post_id: "e770d6d0-0dba-45e7-8ba4-b5ca5d1f39c5",
      username: "zmcruvie3",
      likes: 4,
      comments: 4,
      date: "6/27/2023",
      content: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
      image_url: "http://dummyimage.com/193x100.png/cc0000/ffffff"
    },
    {
      post_id: "6fbe2d41-a399-4e12-b186-2a5a673949ec",
      username: "coubridge4",
      likes: 5,
      comments: 5,
      date: "3/18/2023",
      content: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      image_url: "http://dummyimage.com/139x100.png/dddddd/000000",
      comments_list: [
        {
          comment_id: 3,
          content: "Interesting perspective.",
          created_at: "3/18/2023",
          username: "user3",
          has_liked: true,
          profile_image: "http://dummyimage.com/50x50.png/cc0000/ffffff",
          likes_count: 1
        }
      ]
    },
    {
      post_id: "0f188836-d18a-4f2c-b3ae-348363ab46d5",
      username: "rraynes5",
      likes: 6,
      comments: 6,
      date: "8/13/2023",
      content: "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      image_url: "http://dummyimage.com/155x100.png/ff4444/ffffff"
    },
    {
      post_id: "3d9b20e0-5ee2-41a6-8d24-82f3a275198f",
      username: "ekytley6",
      likes: 7,
      comments: 7,
      date: "1/31/2023",
      content: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      image_url: "http://dummyimage.com/175x100.png/cc0000/ffffff"
    },
    {
      post_id: "9cda2e82-c0aa-4c4e-a50f-154f43a5f8c7",
      username: "fcuxson7",
      likes: 8,
      comments: 8,
      date: "6/14/2023",
      content: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      image_url: "http://dummyimage.com/238x100.png/5fa2dd/ffffff"
    },
    {
      post_id: "45647a25-2dd2-49c1-a7c3-742425cf9689",
      username: "dducker8",
      likes: 9,
      comments: 9,
      date: "5/30/2023",
      content: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      image_url: "http://dummyimage.com/165x100.png/ff4444/ffffff"
    },
    {
      post_id: "ee23d73d-8402-4a48-9566-b0a2923a3983",
      username: "tmcnuff9",
      likes: 10,
      comments: 10,
      date: "7/15/2023",
      content: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      image_url: "http://dummyimage.com/103x100.png/dddddd/000000",
      comments_list: [
        {
          comment_id: 4,
          content: "Nice post!",
          created_at: "7/15/2023",
          username: "user4",
          has_liked: false,
          profile_image: "http://dummyimage.com/50x50.png/cc0000/ffffff",
          likes_count: 4
        },
        {
          comment_id: 5,
          content: "Very insightful.",
          created_at: "7/15/2023",
          username: "user5",
          has_liked: true,
          profile_image: "http://dummyimage.com/50x50.png/cc0000/ffffff",
          likes_count: 5,
          subcomments: [
            {
              comment_id: 6,
              content: "I agree!",
              created_at: "7/15/2023",
              username: "user6",
              has_liked: false,
              profile_image: "http://dummyimage.com/50x50.png/cc0000/ffffff",
              likes_count: 2,
              level_1_comment_id: "5"
            }
          ]
        }
      ]
    },
    {
      post_id: "5bb55a91-36bd-46a8-aa37-bd2ae6acdb2f",
      username: "ouglowa",
      likes: 11,
      comments: 11,
      date: "8/22/2023",
      content: "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      image_url: "http://dummyimage.com/118x100.png/dddddd/000000"
    },
    {
      post_id: "6819bb86-ed0b-46b2-a92b-62450defc53b",
      username: "sekinsb",
      likes: 12,
      comments: 12,
      date: "7/5/2023",
      content: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      image_url: "http://dummyimage.com/215x100.png/5fa2dd/ffffff"
    },
    {
      post_id: "cff5cff3-a52b-4a48-a516-0f637dafb8e7",
      username: "tchatbandc",
      likes: 13,
      comments: 13,
      date: "6/14/2023",
      content: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
      image_url: "http://dummyimage.com/236x100.png/5fa2dd/ffffff"
    },
    {
      post_id: "f0bde84b-ae62-4a6d-9b49-2e5eb649dfef",
      username: "lbrozssetd",
      likes: 14,
      comments: 14,
      date: "2/3/2023",
      content: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
      image_url: "http://dummyimage.com/119x100.png/dddddd/000000"
    },
    {
      post_id: "bc121b01-e45e-4ec0-82ff-df5c9243aeb7",
      username: "ailchuke",
      likes: 15,
      comments: 15,
      date: "11/8/2022",
      content: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      image_url: "http://dummyimage.com/215x100.png/cc0000/ffffff"
    },
    {
      post_id: "a4172dbb-8d9a-49f3-89e1-4459e0904608",
      username: "cpinillaf",
      likes: 16,
      comments: 16,
      date: "2/24/2023",
      content: "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      image_url: "http://dummyimage.com/205x100.png/ff4444/ffffff"
    },
    {
      post_id: "3da1d17b-b25a-4488-8721-f590704161f3",
      username: "abollandg",
      likes: 17,
      comments: 17,
      date: "2/21/2023",
      content: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      image_url: "http://dummyimage.com/138x100.png/5fa2dd/ffffff",
      comments_list: [
        {
          comment_id: 7,
          content: "Nice!",
          created_at: "2/21/2023",
          username: "user7",
          has_liked: true,
          profile_image: "http://dummyimage.com/50x50.png/cc0000/ffffff",
          likes_count: 1
        }
      ]
    },
    {
      post_id: "71bbd631-b1d9-42dd-9de9-c4c993cf6f74",
      username: "mgravesh",
      likes: 18,
      comments: 18,
      date: "6/7/2023",
      content: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      image_url: "http://dummyimage.com/118x100.png/dddddd/000000"
    },
    {
      post_id: "e3a0573c-b6e0-4b12-83c1-57bf091e9cd4",
      username: "rwoolandi",
      likes: 19,
      comments: 19,
      date: "2/18/2023",
      content: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    },
    {
      post_id: "12496c91-5ec7-4142-a943-f66d0721248b",
      username: "gadranj",
      likes: 20,
      comments: 20,
      date: "7/2/2023",
      content: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
      image_url: "http://dummyimage.com/181x100.png/5fa2dd/ffffff"
    }
];
  
import { Message } from '../types';

export const initialMessages: Message[] = [
  {
    id: '1',
    text: "👋 Hello good boy this is my pic",
    sender: 'bot',
    timestamp: new Date(Date.now() - 86400000), // 24 hours ago
    image: 'https://images.assettype.com/nationalherald/2019-08/e691a894-705d-4054-b7f3-d3bd9141037f/sundas_and_anjali.jfif'
  },
  {
    id: '2',
    text: "Very nice 🥰❤️",
    sender: 'user',
    timestamp: new Date(Date.now() - 85400000)
  },
  {
    id: '3',
    text: "This is my private video",
    sender: 'bot',
    timestamp: new Date(Date.now() - 84400000),
    image: 'https://sb1pzcuxlef-qwte--5173--c8c182a3.local-credentialless.webcontainer.io/Very%20nice%20%F0%9F%A5%B0%E2%9D%A4%EF%B8%8F.png',
    link: 'https://example.com/premium-adx-guide'
  },
  {
    id: '4',
    text: "This is my sister's photo, do you want its video?",
    sender: 'bot',
    timestamp: new Date(Date.now() - 83400000),
    image: 'https://d18fr84zq3fgpm.cloudfront.net/indian-girls-or-women-s-for-sex-indian-escort-in-riyadh-8072230_premium.jpg'
  },
  {
    id: '5',
    text: "The video you sent is very professional. Please send your sister's video too now.",
    sender: 'user',
    timestamp: new Date(Date.now() - 82400000)
  },
  {
    id: '6',
    text: "⚡️ Watch this",
    sender: 'bot',
    timestamp: new Date(Date.now() - 81400000),
    image: 'https://static.toiimg.com/thumb/imgsize-17224,msid-92630980/92630980.jpg?width=500&resizemode=4',
    link: 'https://example.com/fast-approval'
  },
  {
    id: '7',
    text: "Good Morning Good Boy ❤️",
    sender: 'bot',
    timestamp: new Date(Date.now() - 80400000),
    image: ''
  }
];
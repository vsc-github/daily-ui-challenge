const contacts = [
  {
    unread: true,
    name: 'Leo Gill',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    location: '18:05 Los Angeles',
    thread: [
      {
        text: 'When should we meet? Maybe at 2-3pm or later?',
        self: true,
        time: '16:05',
      },
      {
        text: 'Let\'s meet at best pizza house. I haven\'t been there in a long time. I heard they just came ip with a new pizza.',
        self: false,
        time: '16:08',
      },
      {
        text: 'That sounds like a good idea!',
        self: true,
        time: '16:15',
      },
      {
        text: 'How  about going to see a movie? Cinemax 26 on Broadway is showing Enchanted.',
        self: false,
        time: '16:20',
      }
    ]
  },
  {
    name: 'Miyah Myles',
    img: 'https://randomuser.me/api/portraits/women/33.jpg',
    location: '1:55 Washington',
    thread: [
      {
        text: 'That is a good question, let me find out for you',
        self: true,
        time: '21:00',
      },
      {
        text: 'I’m sorry, I don’t have the information on that. May I put you on hold for a few minutes? I will clarify this with our manager',
        self: false,
        time: '21:05',
      },
      {
        text: 'I’m not sure, but let me find out for you.',
        self: true,
        time: '21:07',
      },
      {
        text: 'I’m sorry, this question would be out of my expertise, but Daniel from the tech support department will be able to help you. Would you like me to connect you with him?',
        self: false,
        time: '21:15',
      },
      {
        text: 'I’m sorry, I don’t have the information on that. May I have your email/phone number? I will find this out with our accounting department and get back to you shortly.',
        self: true,
        time: '21:16',
      }
    ]
  },
  {
    name: 'Natalie Dyer',
    img: 'https://randomuser.me/api/portraits/women/21.jpg',
    location: '21:05 New York',
    thread: [
      {
        text: 'Would you mind holding on for a few minutes while I am checking this with our administrator?',
        self: true,
        time: '5:05',
      },
      {
        text: 'May I put your call on hold while I am checking your order?',
        self: false,
        time: '6:15',
      },
      {
        text: 'Can I put you on hold for a moment?',
        self: true,
        time: '6:18',
      },
      {
        text: 'Thank you for waiting/holding. I have the details of your latest payment, let me send it over to you.',
        self: false,
        time: '6:20',
      },
      {
        text: 'That\'s okay!',
        self: false,
        time: '6:21',
      },
      {
        text: 'Jan, I will need to put you on hold for a few minutes to run a few tests and see if I can reproduce the problem. Would that be ok with you or would you prefer I call/email you back with the details?',
        self: true,
        time: '6:23',
      },
      {
        text: 'I\'m sorry to keep you waiting. I have managed to reproduce the problem. Here’s what needs to be done to fix it.',
        self: false,
        time: '6:25',
      }
    ]
  },
  {
    name: 'Duane Miles',
    img: 'https://randomuser.me/api/portraits/men/66.jpg',
    location: '18:05 Los Angeles',
    thread: [
      {
        text: 'When should we meet? Maybe at 2-3pm or later?',
        self: true,
        time: '16:05',
      },
      {
        text: 'Let\'s meet at best pizza house. I haven\'t been there in a long time. I heard they just came ip with a new pizza.',
        self: false,
        time: '16:08',
      },
      {
        text: 'That sounds like a good idea!',
        self: true,
        time: '16:15',
      },
      {
        text: 'How  about going to see a movie? Cinemax 26 on Broadway is showing Enchanted.',
        self: false,
        time: '16:20',
      }
    ]
  },
  {
    name: 'Shayan Thorpe',
    img: 'https://d3iw72m71ie81c.cloudfront.net/9476952d-55d4-48e1-8f6a-a4d226b6f3a5-zoro_HackerFund.jpg',
    location: '1:55 Washington',
    thread: [
      {
        text: 'That is a good question, let me find out for you',
        self: true,
        time: '21:00',
      },
      {
        text: 'I’m sorry, I don’t have the information on that. May I put you on hold for a few minutes? I will clarify this with our manager',
        self: false,
        time: '21:05',
      },
      {
        text: 'I’m not sure, but let me find out for you.',
        self: true,
        time: '21:07',
      },
      {
        text: 'I’m sorry, this question would be out of my expertise, but Daniel from the tech support department will be able to help you. Would you like me to connect you with him?',
        self: false,
        time: '21:15',
      },
      {
        text: 'I’m sorry, I don’t have the information on that. May I have your email/phone number? I will find this out with our accounting department and get back to you shortly.',
        self: true,
        time: '21:16',
      }
    ]
  },
  {
    name: 'Lanaye Grey',
    img: 'https://d3iw72m71ie81c.cloudfront.net/female-102.jpg',
    location: '21:05 New York',
    thread: [
      {
        text: 'Would you mind holding on for a few minutes while I am checking this with our administrator?',
        self: true,
        time: '5:05',
      },
      {
        text: 'May I put your call on hold while I am checking your order?',
        self: false,
        time: '6:15',
      },
      {
        text: 'Can I put you on hold for a moment?',
        self: true,
        time: '6:18',
      },
      {
        text: 'Thank you for waiting/holding. I have the details of your latest payment, let me send it over to you.',
        self: false,
        time: '6:20',
      },
      {
        text: 'That\'s okay!',
        self: false,
        time: '6:21',
      },
      {
        text: 'Jan, I will need to put you on hold for a few minutes to run a few tests and see if I can reproduce the problem. Would that be ok with you or would you prefer I call/email you back with the details?',
        self: true,
        time: '6:23',
      },
      {
        text: 'I\'m sorry to keep you waiting. I have managed to reproduce the problem. Here’s what needs to be done to fix it.',
        self: false,
        time: '6:25',
      }
    ]
  },
  {
    name: 'Ben Lamb',
    img: 'https://pbs.twimg.com/profile_images/1055465268909142016/Ho9mF3PJ.jpg',
    location: '18:05 Los Angeles',
    thread: [
      {
        text: 'When should we meet? Maybe at 2-3pm or later?',
        self: true,
        time: '16:05',
      },
      {
        text: 'Let\'s meet at best pizza house. I haven\'t been there in a long time. I heard they just came ip with a new pizza.',
        self: false,
        time: '16:08',
      },
      {
        text: 'That sounds like a good idea!',
        self: true,
        time: '16:15',
      },
      {
        text: 'How  about going to see a movie? Cinemax 26 on Broadway is showing Enchanted.',
        self: false,
        time: '16:20',
      }
    ]
  },
  {
    name: 'Frankie Shaw',
    img: 'https://pbs.twimg.com/profile_images/565258371092070400/kbW-3WU0.jpeg',
    location: '1:55 Washington',
    thread: [
      {
        text: 'That is a good question, let me find out for you',
        self: true,
        time: '21:00',
      },
      {
        text: 'I’m sorry, I don’t have the information on that. May I put you on hold for a few minutes? I will clarify this with our manager',
        self: false,
        time: '21:05',
      },
      {
        text: 'I’m not sure, but let me find out for you.',
        self: true,
        time: '21:07',
      },
      {
        text: 'I’m sorry, this question would be out of my expertise, but Daniel from the tech support department will be able to help you. Would you like me to connect you with him?',
        self: false,
        time: '21:15',
      },
      {
        text: 'I’m sorry, I don’t have the information on that. May I have your email/phone number? I will find this out with our accounting department and get back to you shortly.',
        self: true,
        time: '21:16',
      }
    ]
  },
  {
    name: 'Kristen Ritter',
    img: 'https://pbs.twimg.com/profile_images/643285411020718080/XYVACZHF.jpg',
    location: '21:05 New York',
    thread: [
      {
        text: 'Would you mind holding on for a few minutes while I am checking this with our administrator?',
        self: true,
        time: '5:05',
      },
      {
        text: 'May I put your call on hold while I am checking your order?',
        self: false,
        time: '6:15',
      },
      {
        text: 'Can I put you on hold for a moment?',
        self: true,
        time: '6:18',
      },
      {
        text: 'Thank you for waiting/holding. I have the details of your latest payment, let me send it over to you.',
        self: false,
        time: '6:20',
      },
      {
        text: 'That\'s okay!',
        self: false,
        time: '6:21',
      },
      {
        text: 'Jan, I will need to put you on hold for a few minutes to run a few tests and see if I can reproduce the problem. Would that be ok with you or would you prefer I call/email you back with the details?',
        self: true,
        time: '6:23',
      },
      {
        text: 'I\'m sorry to keep you waiting. I have managed to reproduce the problem. Here’s what needs to be done to fix it.',
        self: false,
        time: '6:25',
      }
    ]
  }
];

export default contacts

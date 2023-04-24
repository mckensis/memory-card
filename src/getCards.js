import { v4 as uuid } from "uuid"

const getCards = (difficulty) => {
  const cards = [
    {
      id: uuid(),
      title: 'Andy Bernard',
      display: '../images/andy.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Angela Martin',
      display: '../images/angela.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Creed Bratton',
      display: '../images/creed.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Darryl Philbin',
      display: '../images/darryl.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'David Wallace',
      display: '../images/david.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Deangelo Vickers',
      display: '../images/deangelo.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Dwight Schrute',
      display: '../images/dwight.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Erin Hannon',
      display: '../images/erin.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Gabe Lewis',
      display: '../images/gabe.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Hank Tate',
      display: '../images/hank.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Holly Flax',
      display: '../images/holly.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Jan Levinson',
      display: '../images/jan.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Jim Halpert',
      display: '../images/jim.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Karen Filippelli',
      display: '../images/karen.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Kelly Kapoor',
      display: '../images/kelly.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Kevin Malone',
      display: '../images/kevin.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Meredith Palmer',
      display: '../images/meredith.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Michael Scott',
      display: '../images/michael.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Mose Schrute',
      display: '../images/mose.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Nate Nickerson',
      display: '../images/nate.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Nellie Bertram',
      display: '../images/nellie.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Oscar Martinez',
      display: '../images/oscar.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Pam Beesly',
      display: '../images/pam.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Pete Miller',
      display: '../images/pete.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Phyllis Lappin',
      display: '../images/phyllis.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Robert California',
      display: '../images/robert.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Roy Anderson',
      display: '../images/roy.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Ryan Howard',
      display: '../images/ryan.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Stanley Hudson',
      display: '../images/stanley.jpg',
      chosen: false,
    },
    {
      id: uuid(),
      title: 'Toby Flenderson',
      display: '../images/toby.jpg',
      chosen: false,
    }
  ];

  let shuffled = [...cards].sort(() => Math.random() - 0.5);

  switch (difficulty) {
    case 'easy':
      return shuffled.splice(0, 6);
    case 'medium':
      return shuffled.splice(0, 12);
    case 'hard':
      return shuffled.splice(0, 18);
    case 'impossible':
    default:
      return shuffled;
  }
}

export default getCards;
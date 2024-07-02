import ButtonFilter from "./button-filter";
const arrButtons = [
  { text: "All", link: "https://cdn.lordicon.com/epietrpn.json" },
  { text: "Chef", link: "https://cdn.lordicon.com/rztizmkk.json" },
  { text: "Kids", link: "https://cdn.lordicon.com/juvsezvc.json" },
  { text: "Meat", link: "https://cdn.lordicon.com/knfxypdv.json" },
  { text: "Salad", link: "https://cdn.lordicon.com/evvwiruv.json" },
  { text: "Desserts", link: "https://cdn.lordicon.com/joucdxcj.json" },
];

const ListButtons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {arrButtons.map((button, index) => (
        <ButtonFilter key={index} link={button.link} text={button.text} />
      ))}
    </div>
  );
};

export default ListButtons;

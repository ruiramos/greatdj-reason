[@react.component]
let make = () => {
  let (items, setItems) = React.useState(() => []);
  let (search, setSearch) = React.useState(() => "");

  let handleSubmit = e => {
    ReactEvent.Form.preventDefault(e);
    Api.searchFor(search)
    |> Js.Promise.then_((res: Api.response) => {
         setItems(l => res.items);
         Js.Promise.resolve(res);
       });
    ();
  };

  <div> <Header setSearch handleSubmit search /> <Content items /> </div>;
};

export function ShowpageCard({ props }) {
  console.log(props);
  return (
    <>
      <p>{props ? props.title : ""}</p>
      <p>{props ? props.description : ""}</p>
      <img alt="theghing" src={props ? props.img : ""} />
      <p>{props ? props.dateUploaded : ""}</p>
    </>
  )
}
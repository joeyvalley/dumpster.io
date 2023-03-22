export function ShowpageCard({ props }) {
  console.log(props);
  return (
    <>
      <img alt="theghing" src={props ? props.img : ""} />
      <p>{props ? props.title : ""}</p>
      <p>{props ? props.description : ""}</p>
      <p>{props ? props.dateUploaded : ""}</p>
    </>
  )
}
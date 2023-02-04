import { FC } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import CostumModal from "../Modal/";

const style = {
  width: "100%",
  height: "100%",
};

const myLatLng = { lat: -25.363, lng: 131.044 };
// type Props = { google: any } & React.HTMLAttributes<any>;
// set the map on all the list
// keep a state of the seleted location.
// useEffect on the selected loation that creates new map of the location with the props
// and add marker.

const MapContainer: FC<{}> = ({}) => {
  const handleClose = () => {};
  return (
    <>
      <CostumModal modalState={true} onClose={handleClose}>
        <Map
          google={window.google}
          style={style}
          zoom={15}
          initialCenter={myLatLng}
        />
        <Marker mapCenter={myLatLng} />
      </CostumModal>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY!,
})(MapContainer);

//   const myLatLng = { lat: -25.363, lng: 131.044 };

//   type MyMapComponentProps = {
//     center: {
//       lat: number;
//       lng: number;
//     };
//     zoom: number;
//     children?: ReactNode;
//   };

//   const MyMapComponent: FC<MyMapComponentProps> = (props) => {
//     const { center, zoom, children } = props;

//     const ref = useRef<HTMLDivElement | null>(null);

//     useEffect(() => {
//       if (!ref) return;
//       const el = ref.current!;
//       const map = new google.maps.Map(el, {
//         center,
//         zoom,
//       });

//       new google.maps.Marker({
//         position: center,
//         map,
//         title: "Hello World!",
//       });

//       // new window.google.maps.Map(ref?.current, {
//       //   center,
//       //   zoom,
//       // });
//     }, [ref?.current]);

//     return (
//       <div ref={ref} id='map'>
//         {children}
//       </div>
//     );
//   };

// const render = (status: Status): ReactElement => {
//   if (status === Status.LOADING) return <h3>{status} ..</h3>;
//   if (status === Status.FAILURE) return <h3>{status} ...</h3>;
//   return <>Hello</>;
// };

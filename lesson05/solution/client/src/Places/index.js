import React from "react";
import { Link } from "react-router-dom";
import Phone from "../Phone";
import Card from "../Card";
import Map from "../Map";
import styles from "./places.module.css";
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

export const placesQuery = gql`
  {
    places {
      id
      name
      email
      phone
      location {
        lat
        long
      }
      images {
        url
      }
    }
  }
`;

export default function Places(props) {
  const { loading, error, data } = useQuery(placesQuery);

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Something went wrong :(</p>;

  return (
    <ul>
      {data.places.map(place => (
        <li key={place.id}>
          <Link to={`/place/${place.id}`}>
            <Card>
              <div className={styles.wrapper}>
                {place.images && place.images.length > 0 ? (
                  <img
                    src={place.images[0].url}
                    alt="preview"
                    className={styles.preview}
                  />
                ) : (
                  place.location &&
                  place.location.lat &&
                  place.location.long && (
                    <Map
                      lat={place.location.lat}
                      long={place.location.long}
                      className={styles.preview}
                    />
                  )
                )}
                <div>
                  {place.name}
                  {place.phone && <Phone phone={place.phone} />}
                  {place.email && <div>{place.email}</div>}
                </div>
              </div>
            </Card>
          </Link>
        </li>
      ))}
    </ul>
  );
}

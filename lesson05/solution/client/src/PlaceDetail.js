import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";

const placeQuery = gql`
  query Place($id: ID!) {
    place(id: $id) {
      id
      name
      images {
        url
      }
    }
  }
`;

export default function Place(props) {
  const { id } = useParams();
  const { loading, error, data } = useQuery(placeQuery, { variables: { id } });

  if (loading) return <p>Loading…</p>;
  if (error) return <p>Something went wrong :(</p>;

  const place = data.place;
  if (place) {
    return (
      <div>
        <Link to="/">Home</Link>
        <div>Place: {place.name}</div>
        <div>
          {place.images && place.images.length > 0 && (
            <img src={place.images[0].url} alt="preview" />
          )}
        </div>
      </div>
    );
  }
  return (
    <div>
      <Link to="/">Home</Link>
      <div>404 - Place not found</div>
    </div>
  );
}

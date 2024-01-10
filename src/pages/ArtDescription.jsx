import { useParams } from 'react-router-dom';
import { allLists } from '../data/list';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

const ArtDescription = () => {
  let { id } = useParams();
  let artItem = null;

  // Iterate over each list in allLists to find the art item
  for (const listKey in allLists) {
    if (Object.prototype.hasOwnProperty.call(allLists, listKey)) {
      artItem = allLists[listKey].find((item) => item.id.toString() === id);
      if (artItem) break;
    }
  }

  //   if (!artItem) {
  //     return <div className="text-xl font-bold p-4">Artwork not found</div>;
  //   }

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      <div className="flex-1">
        <Image
          src={artItem.img}
          alt={artItem.name}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </div>
      <div className="flex-1">
        <Card>
          <CardHeader>
            <h2 className="text-2xl font-bold">{artItem.name}</h2>
            <p className="text-lg"> by {artItem.artist}</p>
          </CardHeader>
          <CardBody>
            <p className="text-md">{artItem.description}</p>
            <p className="text-md">Year: {artItem.date}</p>
            <p className="text-md">Style: {artItem.style}</p>
            <p className="text-md">Dimensions: {artItem.dimensions}</p>
            <p className="text-md">Location: {artItem.location}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ArtDescription;

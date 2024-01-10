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
    <div className="flex flex-col md:flex-row p-4 gap-6">
      <div className="flex-1">
        <Image
          src={artItem.img}
          alt={artItem.name}
          objectFit="cover"
          width="100%"
          height="100%"
          className="shadow-lg rounded-lg"
        />
      </div>
      <div className="flex-1">
        <Card className="shadow-xl rounded-lg">
          <CardHeader className="mb-1">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {artItem.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">by {artItem.artist}</p>
            </div>
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="text-md text-gray-700">{artItem.description}</div>
            <div className="text-sm text-gray-600 space-y-2">
              <div>
                <span className="font-semibold">Year:</span> {artItem.date}
              </div>
              <div>
                <span className="font-semibold">Style:</span> {artItem.style}
              </div>
              <div>
                <span className="font-semibold">Dimensions:</span>{' '}
                {artItem.dimensions}
              </div>
              <div>
                <span className="font-semibold">Location:</span>{' '}
                {artItem.location}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ArtDescription;

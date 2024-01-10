import { useParams } from 'react-router-dom';
import { allLists } from '../data/list';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

const ArtDescription = () => {
  const { id } = useParams();
  const artItem = findArtItemById(id);

  if (!artItem) {
    return <div className="text-xl font-bold p-4">Artwork not found</div>;
  }

  const flagSrc = getFlagSrc(artItem.countryCode);

  return (
    <div className="flex flex-col md:flex-row p-4 gap-6">
      {/* Image Section */}
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

      {/* Info Section */}
      <div className="flex-1">
        <Card className="shadow-xl rounded-lg">
          {/* Card Header */}
          <CardHeader className="mb-1">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {artItem.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">by {artItem.artist}</p>
            </div>
          </CardHeader>

          {/* Card Body */}
          <CardBody className="space-y-4">
            <div className="text-gray-700">{artItem.description}</div>

            <div>
              <span className="font-semibold">Year: </span>
              {artItem.date}
            </div>
            <div>
              <span className="font-semibold">Style: </span>
              {artItem.style}
            </div>
            <div>
              <span className="font-semibold">Dimensions: </span>
              {artItem.dimensions}
            </div>

            {/* Location Detail */}
            <div>
              <span className="font-semibold">Location: </span>
              {artItem.location}
              {flagSrc && (
                <img
                  alt={artItem.countryCode}
                  src={flagSrc}
                  className="inline-block w-6 ml-2"
                />
              )}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

const findArtItemById = (id) => {
  for (const listKey in allLists) {
    if (Object.prototype.hasOwnProperty.call(allLists, listKey)) {
      const item = allLists[listKey].find((item) => item.id.toString() === id);
      if (item) return item;
    }
  }
  return null;
};

const getFlagSrc = (countryCode) => {
  return countryCode
    ? `http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`
    : '';
};

export default ArtDescription;

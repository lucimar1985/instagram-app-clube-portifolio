/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Button, Flex, Typography } from "../../style";
import * as C from "./style";

export function Stories({photos}) {
    const [showAll, setShowAll] = useState(false);
    const [displayedPhotos, setDisplayedPhotos] = useState([]);

    useEffect(() => {
        setDisplayedPhotos(showAll ? photos : photos.slice(0, 10));
    }, [photos, showAll]);

    function handleShowAll() {
        setShowAll(!showAll);
    }

    return (
        <Flex padding="8px 20px" align="start" gap="4px">
            <Typography weight="400" size="18px" height="21px">
                Stories
            </Typography>
           
                <C.Container>
                    {displayedPhotos.map((photo) => (
                        <C.Profile key={photo?.id}>
                            <img
                                src={photo?.src?.medium}
                                alt="fotografia"
                            />
                        </C.Profile>
                    ))}
                </C.Container>
                <Flex align="start">
                <Button onClick={handleShowAll}>
                    <Typography size="14px">
                        {showAll ? 'Ver menos -' : 'Ver mais +'}
                    </Typography>
                </Button>
            </Flex>
        </Flex>
    );
}

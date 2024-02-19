/* eslint-disable react/prop-types */
import { Typography } from "../../style";
import { InfoProfile } from "../infoProfile";
import * as C from "./style";

// eslint-disable-next-line react/prop-types
export function Publications({photos}) {
    return (
        <C.Container>
            <Typography>Publicações</Typography>

            <C.ContainerPublications>
                {photos.map((photo) => (
                    <C.Content key={photo?.id}>
                        <C.PublicationImage
                            src={photo?.src?.medium}
                            alt="fotografia"
                        />

                        <InfoProfile
                        name={photo?.photographer}
                        photo={photo.src?.small}
                        link={photo?.photographer_url}
                        />
                    </C.Content>
                ))}
            </C.ContainerPublications>
        </C.Container>
    );
}

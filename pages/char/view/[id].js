import { Button } from "@mui/material";
import { useRouter } from "next/router";
import SearchAppBar from "../../../src/components/SearchAppBar";
import ViewCoreInformation from "../../../src/components/ViewCoreInformation";
import { NextLinkComposed } from "../../../src/components/NextLinkComposed";
import ViewDevelopment from "../../../src/components/ViewDevelopment";
import ViewSkills from "../../../src/components/ViewSkills";

const CharacterView = () => {

    const router = useRouter();
    const { id } = router.query;
    console.log("/view/"+id);

    const info = {
        CoreInformation: {
        "name": "ADAM",
        "clearance": "UV",
        "sector": "JPN",
        "number": 5,
        "sex": "男",
        "personality": ["短気", "優柔不断", "臆病"],
        },
        Development: {
            "star": 3,
            "xp": 100,
            "Stats": {
                "violence": 2,
                "brains": 1,
                "chutzpah": 0,
                "mechanics": 0,
            }
        }
      }

    return (
        <div>
            <SearchAppBar/>
            <h1>閲覧モード</h1>
            <p>id is : {id}</p>
            <h2>{`${info.CoreInformation.name}-${info.CoreInformation.clearance}-${info.CoreInformation.sector}-${info.CoreInformation.number}`}</h2>
            <ViewCoreInformation info={info.CoreInformation}/>
            <ViewDevelopment info={info.Development}/>
            <ViewSkills info={info.Development}/>

            <Button
                component={NextLinkComposed}
                to={{
                    pathname: "/char/edit/"+id
                }}
                variant="contained"
            >
                編集モードへ
            </Button>
        </div>
    );
}

export default CharacterView;
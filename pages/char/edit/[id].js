import { Button } from "@mui/material";
import { useRouter } from "next/router";
import EditCoreInformation from "../../../src/components/EditCoreInformation";
import SearchAppBar from "../../../src/components/SearchAppBar";
import { NextLinkComposed } from "../../../src/components/NextLinkComposed";

const CharacterEdit = () => {

    const router = useRouter();
    const { id } = router.query;
    console.log("/edit/"+id);

    return (
        <div>
            <SearchAppBar/>
            <h1>編集モード</h1>
            <p>id is : {id}</p>

            <EditCoreInformation/>

            <Button
                component={NextLinkComposed}
                to={{
                    pathname: "/char/view/"+id
                }}
                variant="contained"
            >
                閲覧モードへ
            </Button>
        </div>
    );
}

export default CharacterEdit;
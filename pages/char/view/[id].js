import { Button } from "@mui/material";
import { useRouter } from "next/router";
import SearchAppBar from "../../../components/SearchAppBar";
import ViewCoreInformation from "../../../components/ViewCoreInformation";

const CharacterView = () => {

    const router = useRouter();
    const { id } = router.query;
    console.log("/view/"+id);

    return (
        <div>
            <SearchAppBar/>
            <h1>閲覧モード</h1>
            <p>id is : {id}</p>
            <ViewCoreInformation/>
            <a href={"/char/edit/"+id}>
            <Button
                variant="contained"
            >
                編集モードへ
            </Button>
            </a>
        </div>
    );
}

export default CharacterView;
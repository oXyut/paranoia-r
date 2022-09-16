import { Button } from "@mui/material";
import { useRouter } from "next/router";
import EditCoreInformation from "../../../components/EditCoreInformation";
import SearchAppBar from "../../../components/SearchAppBar";

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

            <a href={"/char/view/"+id}>
            <Button
                variant="contained"
            >
                閲覧モードへ
            </Button>
            </a>
        </div>
    );
}

export default CharacterEdit;
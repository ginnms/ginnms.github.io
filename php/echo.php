<?php
if (strlen($_REQUEST["data"]) > 0) {
        echo htmlentities($_REQUEST["data"]);
}
?>

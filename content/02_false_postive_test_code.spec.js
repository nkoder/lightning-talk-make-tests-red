import React from "react"
import {mount} from "enzyme";

import ConnectionStatus from "./01_invalid_production_code";

//
//

describe("<ConnectionStatus>", () => {

    test("show offline message if is offline", () => {
        // when
        const status = mount(<ConnectionStatus isOffline={true}/>);

        // then
        expect(status.find(".offlineMessage")).toBeTruthy();
    });

});

//
//
//
//
//
//
//
//
//
//
// copy-paste helper
// =================
// expect(status.find("Hello WarsawJS")).toBeTruthy();
// expect(status.find(".offlineMessage")).toHaveLength(1);
// expect(status.find("Hello WarsawJS")).toHaveLength(1);
//
//
//
//
//
//
//
//






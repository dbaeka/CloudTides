<<<<<<< HEAD
import { Dispatcher } from "flux";

export default new Dispatcher();
=======
import {Dispatcher} from "flux";

var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function (action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};

AppDispatcher.handleServerAction = function (action) {
    this.dispatch({
        source: 'SERVER_ACTION',
        action: action
    });
};

export default AppDispatcher;
>>>>>>> 099650ac3b038aeef5dbca2b18b9b3b02e8275f1

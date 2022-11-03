({
    navigateToRecord : function (component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        let recordId = component.get("v.recordId");
        console.log('::: record id is : ' + recordId);
        navEvt.setParams({
          "recordId": recordId,
          "slideDevName": "related"
        });
        navEvt.fire();
    }
})

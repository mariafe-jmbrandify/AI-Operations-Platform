const App = (() => {

    function executeWorkflow(workflowId, payload = {}) {

        Bootstrap.initialize();

        return WorkflowEngine.execute(
            workflowId,
            payload
        );

    }

    return {

        executeWorkflow

    };

})();
describe("L.WFST._parseXml", function () {
    it("checkValidXMLResponse", function () {
        
        var wfst_config = example_config;
        wfst_config.wfst.showExisting = false;
        wfst_config.wfst.loadFeatureDescription = false; 
        
        var map = L.map(document.createElement('div'));
        var drawnItems = L.wfst(null, wfst_config.wfst ).addTo(map);
        
        var xmlString = '<test>123</test>';

        expect( drawnItems._parseXml ).to.be.a('function');

        var xmlResponse = drawnItems._parseXml(xmlString);

        expect(xmlResponse).to.be.an('object');
    });
});
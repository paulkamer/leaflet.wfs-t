describe("L.WFST._parseXml", function () {
    it("checkValidXMLResponse", function () {
        var map = L.map(document.createElement('div'));
        var drawnItems = L.wfst(null, {url: '', featureNS: '', featureType:''}).addTo(map);
        
        var xmlString = '<test>123</test>';

        expect(drawnItems._parseXml).to.be.a('function');

        var xmlResponse = drawnItems._parseXml(xmlString);

        expect(xmlResponse).to.be.an('object');
    });
});
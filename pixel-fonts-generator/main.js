const renderTable = function() {
    var template = `
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>`

    var tr = ''
    for (var i = 0; i < 8; i++) {
        tr += template
    }
    $('tbody').append(tr)
}

const bindSelect = function() {
    $('#id-tbody').on('click', 'td', function() {
        $(this).toggleClass('select')
        updateBinary()
    })
}

const updateBinary = function() {
    var data = fontData()
    $('.fonts-data').text(data)
}

const fontData = function() {
    var trs = $('#id-tbody tr')
    var res = []
    trs.each(function(e) {
        var tr = trData($(this))
        res.push(tr)
    })
    res = processArray(res)
    return res
}

const trData = function(tr) {
    var tds = tr.find('td')
    var data = []
    tds.each(function(e) {
        if ($(this).hasClass('select')) {
            data.push(1)
        } else {
            data.push(0)
        }
    })
    return data
}

const processArray = function(arr) {
    var transposed = _.zip.apply(_, arr)
    var data = transposed.map(e => e.reverse())
    return data
}

const __main = function() {
    renderTable()
    bindSelect()
}

__main()

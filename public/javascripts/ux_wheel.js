// Copyright (c) 2010 Andrew J. Peterson / NDP Software. All Rights Reserved.

(new Image).src = '/images/circles/75572.png';

$(function() {


    (function() {
        // $('table').columnEvents().bind('column.mouseover', f
        $.fn.columnize = function() {
            return $(this).each(function() {
                var $table = $(this);
                $('td,th', this).bind('mouseenter mouseleave click', function(e) {
                    var columnIndex = $(this).parent().children().index($(this));
                    var $cells = $table.find('tr').find(':nth-child(' + (columnIndex + 1) + ')');
                    return $table.trigger('column' + e.type, [$cells]);
                });
            });
        };

        var width = 1100;
        Csster.style({
            '#panel': {
                backgroundColor: '#fffbee',
                padding: '20px 50px 20px 10px',
                width: width - 60,
                table: {
                    font: '15px/20px georgia, League Gothic',
                    width: width - 60,
                    'border-collapse':'collapse',
                    cursor: 'default',
                    thead: {
                        tr: {
                            th: {
                                whiteSpace: 'nowrap',
                                textAlign: 'left',
                                verticalAlign: 'bottom',
                                opacity: .8,
                                div: {
                                    position:'relative',
                                    width: 30,
                                    height: 150,
                                    div: {
                                        position:'absolute'
                                    }
                                },
                                '&:empty': {},
                                '&.hoverColumn': {
                                    opacity: 1
                                }

                            }
                        }

                    },
                    tbody: {
                        tr:{
                            th: {
                                opacity: .8,
                                textAlign: 'right',
                                paddingRight: 5
                            },
                            '&:hover th': {
                                opacity: 1
                            },
                            td: {
                                color: phaseToColor('requirements'),
                                textAlign: 'center',
                                border: '1px solid ' + phaseToColor('requirements')
                            },
//                    'td:nth-child(odd)': {
//                        backgroundColor: '#f7f7f7'
//                    },
                            'td.hoverColumn': {
                                color: phaseToColor('test')
//                            opacity: 1,
//                        backgroundColor: '#f9f9f9'
                            },
                            '&:hover td': {
                                color: phaseToColor('test'),
//                        backgroundColor: '#f9f9f9',
//                        opacity: 1,
                                '&.hoverColumn': {
//                            backgroundColor: 'white',
//                            opacity: 1,
//                            color: 'black'

                                }
                            }
                        }
                    }

                }
            }
        });

        css = {};
        var phases = ['requirements',
            'requirements,design',
            'design',
            'design,test',
            'test',
            'requirements,test',
            'requirements,design,test'];
        for (var ph in phases) {
            css['.' + phases[ph].replace(',', '.')] = {color: phaseToColor(phases[ph])}
        }
        Csster.style(css);


        $(function() {

            var uxQuestions = generateUXQuestions();
            var uxActivities = generateUxActivities();
            console.log('%o', uxActivities);

            var $table = $('table');

            var $col = $('<colgroup>').addClass('labels').appendTo($table);
            for (var i = 0; i < uxActivities.length; i++) {
                if (uxActivities[i].egs) {
                    var $col = $('<colgroup>').appendTo($table).addClass(uxActivities[i].phase.replace(',', ' '));
                }
            }


            var $thead = $('<thead>').appendTo($table);
            var $tr = $('<tr>').appendTo($thead);
            $('<th>').appendTo($tr);
            for (var i = 0; i < uxActivities.length; i++) {
                if (uxActivities[i].egs) {
                    var $th = $('<th>').text(uxActivities[i].name).appendTo($tr).addClass(uxActivities[i].phase.replace(',', ' '));
                    $th.wrapInner('<div>');
                    $th.wrapInner('<div>');
                }
            }

            var $tbody = $('<tbody>').appendTo($table);
            for (var q in uxQuestions) {
                var $tr = $('<tr>').appendTo($tbody);
                $('<th>').text(q).addClass(uxQuestions[q][0].phase.replace(',', ' ')).appendTo($tr);

                console.log('%o', uxQuestions[q]);

                for (var a = 0; a < uxActivities.length; a++) {
                    var activity = uxActivities[a];
                    if (activity.egs) {
                        var $td = $('<td>').appendTo($tr);
                        for (var j = 0; j < activity.egs.length; j++) {
                            if (q == activity.egs[j]) {
                                $td.html('&bull;');
                            }
                        }
                    }
                }

            }
            $('table thead tr th div div').css({rotate: '-60deg', top: 80, left: 65})


            $('table').columnize().bind('columnmouseenter',
                                       function(e, $cells) {
                                           if ($cells) $cells.addClass('hoverColumn');
                                       }).bind('columnmouseleave', function(e, $cells) {
                if ($cells) $cells.removeClass('hoverColumn');
            });

        });

    })();


    var bg = phaseToColor('requirements').lighten(10).saturate(-30);
    var wheelLeft = 0, wheelTop = 0, wheelRadius = 400;
    Csster.style({
        body: {
            margin: 0,
            padding: 0,
            backgroundColor: bg,
            backgroundImage: 'url(/images/circles/75572.png)'
        },
        '#circle': {
            cursor: 'pointer',
            position: 'absolute',
            top: wheelTop,
            left: 0,
            width: wheelRadius * 2,
            height: wheelRadius * 2 //'800' height='800'

        },
        '#phase': {
            position: 'absolute',
            top: wheelTop + 10,
            left: wheelLeft + 2 * wheelRadius + 10 - 200
        },
        '#answers': {
            display: 'none',
            padding: 20,
            backgroundColor: phaseToColor('requirements').saturate(20).darken(30),
            color: '#52730A'.lighten(20).saturate(-50),//'#f2e4ae'.darken(50),
            position: 'absolute',
            top: wheelTop + 15,
            left: wheelLeft + 2 * wheelRadius + 10,
            width: 350,
            height: 715,
            border: '1px 1px 1px 0 solid #666',
            has: [boxShadow([0,0], 10, bg.darken(30)),roundedCorners(10)],
            '.box': {
                position: 'absolute',
                padding: '20px 10px 10px 10px',
                width: 350 - 20,
                '*': {
                    padding: 0,
                    margin: 0
                },
                h6: {
                    padding: 0,
                    margin: 0,
                    font: '20px/15px League Gothic',
                    paddingBottom: 10,
                    fontStyle: 'italic'
                }
            },
            '.what': {
                top: 0,
                height: 230 + 125,
                h3: {
                    font: '60px/55px League Gothic',
                    paddingLeft: 15,
                    textIndent: -15,
                    color: phaseToColor('requirements').lighten(20)
                }
            },
            '.when': {
                height: 75,
                top: 265,
                left: 10,
                zIndex: 10,
                opacity: .8,
                cursor: 'pointer',
                '&:hover': {opacity: 1},
                ol: {
                    has: clearfix(),
                    position: 'absolute',
                    bottom: 0,
                    li: {
                        width: 108
                    }
                },
                p: {
                    font: '15px/17px georgia',
                    margin: 0,
                    opacity: .7,
                    color: 'white',
                    padding: '0 0 0 5px',
                    visibility: 'hidden'
                },
                '&:hover': { opacity: 1.0},
                '&:hover p': { visibility: 'visible'}
            },
            '.how': {
                top: 440 - 25 - 30,
                height: 300 + 30,
                ul: {
                    display: 'block',
                    padding: 0, margin: 0,
                    has: clearfix(),
                    li: {
//                        display: 'block',
                        font: '30px/30px League Gothic',
//                        border: '1px solid transparent',
                        padding: '2px 5px',
//                        marginBottom: -1,
//                        marginRight: -1,
                        'list-style-position':'inside',
                        a: {
                            color: '#ffffff',//'#f2e4ae'.darken(50),
                            textDecoration: 'none',
                            '&:hover': {textDecoration: 'underline'}
                        },
                        '&.good': { color: 'white', borderColor: 'transparent #52730A #52730A transparent' },
                        '&.bad': { opacity: .05 }
                    }
                },
                p: {
                    font: '15px/17px georgia',
                    opacity: .7,
                    color: 'white',
                    padding: '15px 5px 5px'
                }
            },
            '.nib': {
                position: 'absolute',
//                borderRight: '40px solid red',
//                borderTop: '20px solid transparent',
//                borderBottom: '0 solid transparent',
                height: 1,
                backgroundColor: '#000',
                width: 390,
                top: 385,
                left: -20
            }
        },
        '#about': {
            fontFamily: 'georgia',
            width: 500,
            padding: '10px 20px',
            backgroundColor: '#ecb678'.saturate(0).darken(30),
            color: 'white',
            h1: {
                font: '35px/35px League Gothic, georgia',
                padding: '10px 0 0 0',
                margin: 0
            },
            h4: {
                color: 'white',
                font: '25px/25px League Gothic, georgia',
                padding: '5px 0',
                margin: 0,
                fontStyle: 'plain',
                span: {
                    paddingTop: 0,
                    opacity: .8,
                    'float': 'right',
                    font: '20px/25px League Gothic, georgia'
                }
            },
            '&:hover h4 span': {opacity: 1},
            p: {
                font: '15px/25px georgia',
                margin: 0,
                paddingRight: 30
            },
            h5: {
                font: '25px/25px League Gothic, georgia',
                padding: '10px 0 0 0',
                margin: 0,
                fontStyle: 'plain'
            },
            '.copyright': {
                font: '12px/25px georgia'
            },
            'a:link, a:visited': {
                color: 'white',
                textDecoration: 'none'
            },
            'a:hover': {
                textDecoration: 'underline'
            }
        },
        ol: {
            has: clearfix(),
            display: 'block',
            padding: 0,
            margin: '5px 0',
            li: {
                textAlign: 'center',
                font: '20px/25px League Gothic',
                display: 'block',
                'float': 'left',
                padding: '5px 10px',
                marginRight: 2,
                color: 'white',
                border: '1px solid white',
                '&.off': {
                    opacity: .2
                },
                '&.requirements': { backgroundColor: phaseToColor('requirements')},
                '&.design': { backgroundColor: phaseToColor('design')},
                '&.test': { backgroundColor: phaseToColor('test')}
            }
        }

    });

    $.fn.peelOff = function(options) {

        var $this = $(this);
        $this.hide();

        var bg = '#fffbee';
        var $control = $('<div>').css({cursor: 'pointer',
            height: 40, width: 40,
            position: 'fixed', top:0, left: 0,
            backgroundColor: bg.darken(10)}).
                css(boxShadow([0,0], 10, bg.darken(50))).appendTo('body');
        $('<div>').css({width: 0, height: 0, position: 'relative',
            top: 0, left: 0, border: '20px solid transparent',
            borderRightColor: bg.darken(20),
            borderBottomColor: bg.darken(20)}).appendTo($control);
        $control.click(function() {
            $this.css({position: 'fixed', height: '100%', width: 1100,
                weight: '100%',
                zIndex: 10000, overflow: 'auto'}).slideDown();
        });
        $this.click(function() { $this.slideUp();})

    };


    $.fn.pulloutPanel = function(options) {

        var settings = $.extend({}, $.fn.pulloutPanel.defaults, options);

        return $(this).each(function() {
            var $this = $(this);

            $this.addClass('pullout_panel');

            $this.bind('open', function() {
                $this.animate({bottom: 0}, 'slow', 'easeOutBounce', function() {
                    $this.removeClass('closed').addClass('opened');
                    $this.trigger('opened');
                });
            });
            $this.bind('close', function() {
                var height = $this.innerHeight();
                $this.animate({bottom: -height + 50}, 'slow', 'easeOutBounce', function() {
                    $this.addClass('closed').removeClass('opened');
                    $this.trigger('closed');
                });
            });
            $this.bind('toggle', function() {
                $this.trigger($this.hasClass('opened') ? 'close' : 'open');
            });

            once(function() {
                Csster.style({
                    '.pullout_panel': {
                        position: 'fixed',
                        bottom: 0,
                        has: [settings.css]
                    }
                });
            });

            $this.trigger(settings.open ? 'open' : 'close');

        });
    };

    $.fn.pulloutPanel.defaults = {
        attachTo: 'bottom',
        css: {
            left: 0,
            minHeight: 390,
            border: '1px 1px 1px 0 solid #666',
            has: [roundedCorners('tr', 10),boxShadow([0,0], 10, phaseToColor('requirements').saturate(-30).darken(50))],
            cursor: 'pointer'
        }
    };

    $('#about').css('visibility', 'hidden').pulloutPanel({open:true}).click(
                                                                           function() {
                                                                               $(this).trigger('toggle');
                                                                           }).bind('opened closed', function() {
        $(this).find('h4 span').text('click to ' + ($(this).hasClass('opened') ? 'hide' : 'find out'));
    });

    // Display them on the page at just the right time.
    setTimeout(function() {
        $('#about').trigger('close');
    }, 4000);
    setTimeout(function() {
        $('#about').css('visibility', 'visible');
    }, 4500);


    var uxQuestions = generateUXQuestions();
    var uxActivities = generateUxActivities();


    var items = [];
    for (var q in uxQuestions) {
        var acts = uxQuestions[q];

        var color = phaseToColor(acts[0].phase);

        var item = {
            label:q,
            backgroundColor: color,
            color: color.saturate(-30).lighten(70),
            bubbleBackgroundColor: color,
            data: acts
        };
        items.push(item);
    }

    function shuffle(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i),x = o[--i],o[i] = o[j],o[j] = x) {
        }
        ;
        return o;
    }

    items = shuffle(items);


    $('#circle').bind('focusOn',
                     function(e, item) {
                         var data = item.data;

                         $('#answers').empty().show('fast');

                         var $when = $('<div>').addClass('when').appendTo('#answers');
                         $('<div>').addClass('what').appendTo('#answers');
                         $('<div>').addClass('how').appendTo('#answers');
                         $('#answers').find('div').addClass('box');

                         var phase = data[0].phase;
                         var $phases = $('<ol>');
                         $('<li>').text('before').addClass('requirements').addClass(phase.indexOf('requirements') >= 0 ? 'on' : 'off').appendTo($phases);
                         $('<li>').text('design & build').addClass('design').addClass(phase.indexOf('design') >= 0 ? 'on' : 'off').appendTo($phases);
                         $('<li>').text('refine').addClass('test').addClass(phase.indexOf('test') >= 0 ? 'on' : 'off').appendTo($phases);
                         $phases.appendTo($when);
                         $('<p></p>').html({
                             'requirements': 'These questions are usually asked <em>before</em> product definition starts.',
                             'requirements,design': 'These questions are usually asked <em>before or during</em> product definition, while early design ideas develop.',
                             'design': 'These questions are asked during product definition, while exploring and building solutions.',
                             'design,test': 'These questions are usually asked <em>after</em> basic requirements, while defining and iterating on the product.',
                             'test': 'These questions are usually asked <em>while iterating on</em> the product.',
                             'requirements,test': 'These questions are usually asked <em>before</em> product definition or after construction.',
                             'requirements,design,test': 'These questions are asked during all phases of a product development.'
                         }[phase]).appendTo($when);


                         // question and activities
                         var $what = $('<div>').addClass('what').appendTo('#answers');
                         var $how = $('<div>').addClass('how').appendTo('#answers');
                         $('#answers').find('div').addClass('box');


                         $('<h6>').text('If your questions are like...').appendTo($what);
                         $('<h3>').html('&ldquo;' + item.label + '&rdquo;').appendTo($what);


                         $('<h6>').text('consider...').appendTo($how);
                         var $activities = $('<ul>');
                         for (var ai in uxActivities) {
                             var $li = $('<li>');
                             var a = uxActivities[ai];
                             var yes = false;
                             for (var i = 0; i < data.length; i++) {
                                 if (data[i].name == a.name) yes = true;
                             }
                             if (yes) {
                                 var link = a.ref || 'http://www.google.com/search?q=' + a.name;
                                 $('<a></a>').
                                         attr('href', link).
                                         attr('target', '_blank').
                                         attr('data-description', a.description || '').
                                         text(a.name).appendTo($li);
                                 $li.addClass(yes ? 'good' : 'bad').
                                         css('backgroundColor', phaseToColor(a.phase));
                                 $li.appendTo($activities);
                             }
                         }


                         $activities.appendTo($how);
                         $('<p></p>').appendTo($how);
                         $activities.find('li').mouseenter(function() {
                             if ($(this).hasClass('good')) {
                                 var desc = $(this).find('a').attr('data-description');
                                 var href = $(this).find('a').attr('href');
                                 if (!href.match(/google\.com/)) desc += ' Click to learn more.';
                                 $how.
                                         find('p').
                                         text(desc).
                                         click(function() {
                                     document.href = href;
                                 });
                             }
                         });


                         $('<div>').addClass('nib').css('backgroundColor', item.bubbleBackgroundColor).appendTo('#answers');


                     }).bind('passBy',
                            function() {
                                //$('#answers').animate({opacity: .9},'fast');
                            }).bind('clickOn',
                                   function(e, item) {
                                       $(this).trigger('spinTo', item.label);
                                   }).wheel(items, {
                                                       textOffset: [10,5],
                                                       insideRadius: 80,
                                                       font: '14px georgia, verdana, Arial',
                                                       duration: 1000,
                                                       easing: $.easing.easeOutBounce,
                                                       centerColor: phaseToColor('requirements')
                                                   });


    $('html').bind('keydown', function(event) {
        if (event.keyCode == 32) {
            $('#circle').trigger('toggle');
        } else if (event.keyCode == 61 || event.keyCode == 107 || event.keyCode == 40) {
            $('#circle').trigger('next');
        } else if (event.keyCode == 38 || event.keyCode == 109) {
            $('#circle').trigger('prev');
        }
    });


    $('#circle').trigger('spinTo', items[3].label);

    $('#data').peelOff();

});



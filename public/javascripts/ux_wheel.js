// Copyright (c) 2010 Andrew J. Peterson / NDP Software. All Rights Reserved.
$(function() {

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
                height: 60,
                top: 270,
                left: 10,
                zIndex: 10,
                opacity: .2,
                '&:hover': {opacity: 1},
                ol: {
                    has: clearfix(), 
                    li: {
                        width: 108
                    }
                },
                p: {
                    font: '16px/18px georgia',
                    margin: 0,
                    opacity: .7,
                    color: 'white',
                    padding: '0 5px',
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
                    font: '16px/18px georgia',
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
                fontSize: 24,
                font: '35px/50px League Gothic, georgia',
                span: {
                    fontSize: 15
                }
            },
            p: {
                font: '15px/25px georgia',
                margin: 0,
                paddingRight: 30
            },
            h4: {
                font: '18px/25px georgia',
                padding: '5px 0',
                margin: 0,
                fontStyle: 'italic',
                span: {
                    paddingTop: 0,
                    opacity: .8,
                    'float': 'right',
                    font: '15px/25px georgia'
                }
            },
            '&:hover h4 span': {opacity: 1},
            '.copyright': {
                font: '12px/25px georgia'
            },
            h5: {
                font: '15px/25px georgia',
                padding: 0,
                margin: 0,
                opacity: .8,
                fontStyle: 'italic'
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


//    (function() {
//        images = [
//            '1015635.png',
//            '1289155357_grunge-texture-8-500.jpg',
//            '28251.png',
//            '381163.png',
//            '398810.png',
//            '48084.png',
//            '62962.png',
//            '716530.png',
//            '725333.png',
//            '79814.png',
//            'circles',
//            'circles/171311.png',
//            'circles/23380.png',
//            'circles/26191.png',
//            'circles/434378.png',
//            'circles/48597.png',
//            'circles/512718.png',
//            'circles/518796.png',
//            'circles/579955.png',
//            'circles/599610.png',
//            'circles/623245.png',
//            'circles/75572.png',
//            'circles/81744.png',
//            'circles/941424.png',
//            'circles/98538.png',
//            'circles/ULP223.gif',
//            'COLOURlovers.com-*sunny_texture**.png',
//            'Damasco',
//            'Inigo\'s Wallpaper.jpg',
//            'KF60572.JPG',
//            'photoshop-textures-diamond-background-circus.jpg',
//            'spaceball.gif',
//            'stripes',
//            'stripes/13767.png',
//            'stripes/17501.png',
//            'stripes/43697.png',
//            'stripes/540764.png',
//            'stripes/66937.png',
//            'stripes/716445.png',
//            'stripes/716446.png',
//            'stripes/716449.png',
//            'stripes/97719.png'
//        ];
//        c = 0;
//        setInterval(function() {
////            $('body').css('backgroundImage', 'url(/images/' + images[c] + ')');
//            c = (c + 1) % images.length;
//        }, 2000);
//    })();


    $.fn.pulloutPanel = function(options) {

        var settings = $.extend({}, $.fn.pulloutPanel.defaults, options);

        return $(this).each(function() {
            var $this = $(this);

            $this.addClass('pullout_panel');

            $this.bind('open', function(event) {
                $this.animate({bottom: 0}, 'slow', 'easeOutBounce', function() {
                    $this.removeClass('closed').addClass('opened');
                    $this.trigger('opened');
                });
            });
            $this.bind('close', function(event) {
                var height = $this.innerHeight();
                $this.animate({bottom: -height + 50}, 'slow', 'easeOutBounce', function() {
                    $this.addClass('closed').removeClass('opened');
                    $this.trigger('closed');
                });
            });
            $this.bind('toggle', function(event) {
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

    $('#about').css('visibility','hidden').pulloutPanel({open:true}).click(
                                                   function() {
                                                       $(this).trigger('toggle');
                                                   }).bind('opened closed', function() {
        $(this).find('h4 span').text('click to ' + ($(this).hasClass('opened') ? 'hide' : 'show'));
    });

    setTimeout(function() {$('#about').trigger('close');}, 4000);
    setTimeout(function() {$('#about').css('visibility','visible');}, 4500);


    var uxQuestions = generateUXQuestions();
    var uxActivities = generateUxActivities();

    function phaseToColor(phase) {
//        var c = ColorFactory.interpolate('#DE790A'.lighten(10), '#BD5108', 7);
//        var c = ColorFactory.interpolate('#c3df88'.darken(20), '#c3df88'.darken(40), 7);
//        var c = ColorFactory.interpolate('#ecb678'.darken(20), '#ecb678'.darken(60), 7);
        var c = ColorFactory.interpolate('#c3df88'.darken(20), '#c3df88'.saturate(30).darken(50), 7);
        return {
            'requirements': c[0],
            'requirements,design': c[1],
            'design': c[2],
            'design,test': c[3],
            'test': c[4],
            'requirements,test': c[5],
            'requirements,design,test': c[6]
        }[phase] || '#000000'.saturate(-40).lighten(20);
    }


    var items = [];
    for (var q in uxQuestions) {
        var acts = uxQuestions[q];

        var color = phaseToColor(acts[0].phase);

        var item = {
            label:q,
            backgroundColor: color,
            color: color.saturate(-30).lighten(70),
            bubbleBackgroundColor: color,
            bubbleColor: color.lighten(80),
            data: acts
        };
        items.push(item);
    }

    function shuffle(o) {
        for (var j, x, i = o.length; i; j = parseInt(Math.random() * i),x = o[--i],o[i] = o[j],o[j] = x);
        return o;


        var s = [];
        while (a.length) {
            var r = a.splice(Math.random() * a.length, 1);
            s.push(r);
        }
        return s;
        while (s.length) a.push(s.shift());
        return s;
    }

    items = shuffle(items);


    $('#circle').bind('focusOn',
                     function(e, item) {
                         var data = item.data;

                         // bubbleColor too
                         $('#answers').empty().animate({ opacity: 1.0}, 'fast');

                         var $when = $('<div>').addClass('when').appendTo('#answers');
                         var $what = $('<div>').addClass('what').appendTo('#answers'); //.css({backgroundColor: item.bubbleBackgroundColor})
                         var $how = $('<div>').addClass('how').appendTo('#answers');
                         $('#answers').find('div').addClass('box');

//                         $('<h6>').text('These questions come up...').appendTo($when);
                         var phase = data[0].phase;
                         $phases = $('<ol>');
                         $('<li>').text('before').addClass('requirements').addClass(phase.indexOf('requirements') >= 0 ? 'on' : 'off').appendTo($phases);
                         $('<li>').text('design & build').addClass('design').addClass(phase.indexOf('design') >= 0 ? 'on' : 'off').appendTo($phases);
                         $('<li>').text('refine').addClass('test').addClass(phase.indexOf('test') >= 0 ? 'on' : 'off').appendTo($phases);
                         $phases.appendTo($when);
                         $('<p></p>').html({
                             'requirements': 'These questions are usually asked <em>before</em> product definition starts.',
                             'requirements,design': 'These questions are usually asked <em>before or during</em> product definition, while early design ideas develop.',
                             'design': 'unused',
                             'design,test': 'These questions are usually asked <em>after</em> basic requirements, while defining and iterating on the product.',
                             'test': 'These questions are usually asked <em>while iterating on</em> the product.',
                             'requirements,test': 'These questions are usually asked <em>before</em> product definition or after construction.',
                             'requirements,design,test': 'These questions are asked during all phases of a product development.'
                         }[phase]).appendTo($when);


                         // question and activities
                         var $what = $('<div>').addClass('what').appendTo('#answers');
                         //.css({backgroundColor: item.bubbleBackgroundColor})
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
                                         attr('title', a.description || '').
                                         text(a.name).appendTo($li);
                                 $li.addClass(yes ? 'good' : 'bad').
                                         css('backgroundColor', phaseToColor(a.phase));
                                 $li.appendTo($activities);
                             }
                         }


//                         for (var i = 0; i < data.length; i++) {
//                             var $li = $('<li>').appendTo($names);
//                             var link = data[i].ref || 'http://www.google.com/search?q=' + data[i].name;
//                             $('<a></a>').attr('href', link).attr('target', '_blank').text(data[i].name).appendTo($li);
//                         }
                         $activities.appendTo($how);
                         $('<p></p>').appendTo($how);
                         $activities.find('li').mouseenter(function() {
                             if ($(this).hasClass('good')) {
                                 $how.
                                         find('p').
                                         text($(this).find('a').attr('title') + ' Click to learn more.').
                                         click(function() { document.href = $(this).find('a').attr('href'); });
                             }
                         });


                         $('<div>').addClass('nib').css('backgroundColor', item.bubbleBackgroundColor).appendTo('#answers');


                     }).bind('passBy',
                            function(e, item) {
                                //$('#answers').animate({opacity: .9},'fast');
                            }).bind('clickOn',
                                   function(e, item) {
                                       $(this).trigger('spinTo', item.label);
                                   }).wheel(items, {
                                                       textOffset: [10,5],
                                                       insideRadius: 80,
                                                       //    maskColor: 'transparent',
                                                       //    hilightColor: 'white',
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

});



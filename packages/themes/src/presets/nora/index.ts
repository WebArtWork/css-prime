import type { Preset } from '@wawjs/css-prime-themes/types';
import type { NoraBaseDesignTokens } from './base/index.d';

import accordion from '@wawjs/css-prime-themes/nora/accordion';
import autocomplete from '@wawjs/css-prime-themes/nora/autocomplete';
import avatar from '@wawjs/css-prime-themes/nora/avatar';
import badge from '@wawjs/css-prime-themes/nora/badge';
import base from '@wawjs/css-prime-themes/nora/base';
import blockui from '@wawjs/css-prime-themes/nora/blockui';
import breadcrumb from '@wawjs/css-prime-themes/nora/breadcrumb';
import button from '@wawjs/css-prime-themes/nora/button';
import card from '@wawjs/css-prime-themes/nora/card';
import carousel from '@wawjs/css-prime-themes/nora/carousel';
import cascadeselect from '@wawjs/css-prime-themes/nora/cascadeselect';
import checkbox from '@wawjs/css-prime-themes/nora/checkbox';
import chip from '@wawjs/css-prime-themes/nora/chip';
import colorpicker from '@wawjs/css-prime-themes/nora/colorpicker';
import confirmdialog from '@wawjs/css-prime-themes/nora/confirmdialog';
import confirmpopup from '@wawjs/css-prime-themes/nora/confirmpopup';
import contextmenu from '@wawjs/css-prime-themes/nora/contextmenu';
import datatable from '@wawjs/css-prime-themes/nora/datatable';
import dataview from '@wawjs/css-prime-themes/nora/dataview';
import datepicker from '@wawjs/css-prime-themes/nora/datepicker';
import dialog from '@wawjs/css-prime-themes/nora/dialog';
import divider from '@wawjs/css-prime-themes/nora/divider';
import dock from '@wawjs/css-prime-themes/nora/dock';
import drawer from '@wawjs/css-prime-themes/nora/drawer';
import editor from '@wawjs/css-prime-themes/nora/editor';
import fieldset from '@wawjs/css-prime-themes/nora/fieldset';
import fileupload from '@wawjs/css-prime-themes/nora/fileupload';
import floatlabel from '@wawjs/css-prime-themes/nora/floatlabel';
import galleria from '@wawjs/css-prime-themes/nora/galleria';
import iconfield from '@wawjs/css-prime-themes/nora/iconfield';
import iftalabel from '@wawjs/css-prime-themes/nora/iftalabel';
import image from '@wawjs/css-prime-themes/nora/image';
import imagecompare from '@wawjs/css-prime-themes/nora/imagecompare';
import inlinemessage from '@wawjs/css-prime-themes/nora/inlinemessage';
import inplace from '@wawjs/css-prime-themes/nora/inplace';
import inputchips from '@wawjs/css-prime-themes/nora/inputchips';
import inputgroup from '@wawjs/css-prime-themes/nora/inputgroup';
import inputnumber from '@wawjs/css-prime-themes/nora/inputnumber';
import inputotp from '@wawjs/css-prime-themes/nora/inputotp';
import inputtext from '@wawjs/css-prime-themes/nora/inputtext';
import knob from '@wawjs/css-prime-themes/nora/knob';
import listbox from '@wawjs/css-prime-themes/nora/listbox';
import megamenu from '@wawjs/css-prime-themes/nora/megamenu';
import menu from '@wawjs/css-prime-themes/nora/menu';
import menubar from '@wawjs/css-prime-themes/nora/menubar';
import message from '@wawjs/css-prime-themes/nora/message';
import metergroup from '@wawjs/css-prime-themes/nora/metergroup';
import multiselect from '@wawjs/css-prime-themes/nora/multiselect';
import orderlist from '@wawjs/css-prime-themes/nora/orderlist';
import organizationchart from '@wawjs/css-prime-themes/nora/organizationchart';
import overlaybadge from '@wawjs/css-prime-themes/nora/overlaybadge';
import paginator from '@wawjs/css-prime-themes/nora/paginator';
import panel from '@wawjs/css-prime-themes/nora/panel';
import panelmenu from '@wawjs/css-prime-themes/nora/panelmenu';
import password from '@wawjs/css-prime-themes/nora/password';
import picklist from '@wawjs/css-prime-themes/nora/picklist';
import popover from '@wawjs/css-prime-themes/nora/popover';
import progressbar from '@wawjs/css-prime-themes/nora/progressbar';
import progressspinner from '@wawjs/css-prime-themes/nora/progressspinner';
import radiobutton from '@wawjs/css-prime-themes/nora/radiobutton';
import rating from '@wawjs/css-prime-themes/nora/rating';
import ripple from '@wawjs/css-prime-themes/nora/ripple';
import scrollpanel from '@wawjs/css-prime-themes/nora/scrollpanel';
import select from '@wawjs/css-prime-themes/nora/select';
import selectbutton from '@wawjs/css-prime-themes/nora/selectbutton';
import skeleton from '@wawjs/css-prime-themes/nora/skeleton';
import slider from '@wawjs/css-prime-themes/nora/slider';
import speeddial from '@wawjs/css-prime-themes/nora/speeddial';
import splitbutton from '@wawjs/css-prime-themes/nora/splitbutton';
import splitter from '@wawjs/css-prime-themes/nora/splitter';
import stepper from '@wawjs/css-prime-themes/nora/stepper';
import steps from '@wawjs/css-prime-themes/nora/steps';
import tabmenu from '@wawjs/css-prime-themes/nora/tabmenu';
import tabs from '@wawjs/css-prime-themes/nora/tabs';
import tabview from '@wawjs/css-prime-themes/nora/tabview';
import tag from '@wawjs/css-prime-themes/nora/tag';
import terminal from '@wawjs/css-prime-themes/nora/terminal';
import textarea from '@wawjs/css-prime-themes/nora/textarea';
import tieredmenu from '@wawjs/css-prime-themes/nora/tieredmenu';
import timeline from '@wawjs/css-prime-themes/nora/timeline';
import toast from '@wawjs/css-prime-themes/nora/toast';
import togglebutton from '@wawjs/css-prime-themes/nora/togglebutton';
import toggleswitch from '@wawjs/css-prime-themes/nora/toggleswitch';
import toolbar from '@wawjs/css-prime-themes/nora/toolbar';
import tooltip from '@wawjs/css-prime-themes/nora/tooltip';
import tree from '@wawjs/css-prime-themes/nora/tree';
import treeselect from '@wawjs/css-prime-themes/nora/treeselect';
import treetable from '@wawjs/css-prime-themes/nora/treetable';
import virtualscroller from '@wawjs/css-prime-themes/nora/virtualscroller';

export default {
    ...base,
    components: {
        accordion,
        autocomplete,
        avatar,
        badge,
        blockui,
        breadcrumb,
        button,
        datepicker,
        card,
        carousel,
        cascadeselect,
        checkbox,
        chip,
        colorpicker,
        confirmdialog,
        confirmpopup,
        contextmenu,
        dataview,
        datatable,
        dialog,
        divider,
        dock,
        drawer,
        editor,
        fieldset,
        fileupload,
        iftalabel,
        floatlabel,
        galleria,
        iconfield,
        image,
        imagecompare,
        inlinemessage,
        inplace,
        inputchips,
        inputgroup,
        inputnumber,
        inputotp,
        inputtext,
        knob,
        listbox,
        megamenu,
        menu,
        menubar,
        message,
        metergroup,
        multiselect,
        orderlist,
        organizationchart,
        overlaybadge,
        popover,
        paginator,
        password,
        panel,
        panelmenu,
        picklist,
        progressbar,
        progressspinner,
        radiobutton,
        rating,
        ripple,
        scrollpanel,
        select,
        selectbutton,
        skeleton,
        slider,
        speeddial,
        splitter,
        splitbutton,
        stepper,
        steps,
        tabmenu,
        tabs,
        tabview,
        textarea,
        tieredmenu,
        tag,
        terminal,
        timeline,
        togglebutton,
        toggleswitch,
        tree,
        treeselect,
        treetable,
        toast,
        toolbar,
        tooltip,
        virtualscroller
    }
} satisfies Preset<NoraBaseDesignTokens>;

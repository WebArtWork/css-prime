import type { Preset } from '@wawjs/css-prime-themes/types';
import type { MaterialBaseDesignTokens } from './base/index.d';

import accordion from '@wawjs/css-prime-themes/material/accordion';
import autocomplete from '@wawjs/css-prime-themes/material/autocomplete';
import avatar from '@wawjs/css-prime-themes/material/avatar';
import badge from '@wawjs/css-prime-themes/material/badge';
import base from '@wawjs/css-prime-themes/material/base';
import blockui from '@wawjs/css-prime-themes/material/blockui';
import breadcrumb from '@wawjs/css-prime-themes/material/breadcrumb';
import button from '@wawjs/css-prime-themes/material/button';
import card from '@wawjs/css-prime-themes/material/card';
import carousel from '@wawjs/css-prime-themes/material/carousel';
import cascadeselect from '@wawjs/css-prime-themes/material/cascadeselect';
import checkbox from '@wawjs/css-prime-themes/material/checkbox';
import chip from '@wawjs/css-prime-themes/material/chip';
import colorpicker from '@wawjs/css-prime-themes/material/colorpicker';
import confirmdialog from '@wawjs/css-prime-themes/material/confirmdialog';
import confirmpopup from '@wawjs/css-prime-themes/material/confirmpopup';
import contextmenu from '@wawjs/css-prime-themes/material/contextmenu';
import datatable from '@wawjs/css-prime-themes/material/datatable';
import dataview from '@wawjs/css-prime-themes/material/dataview';
import datepicker from '@wawjs/css-prime-themes/material/datepicker';
import dialog from '@wawjs/css-prime-themes/material/dialog';
import divider from '@wawjs/css-prime-themes/material/divider';
import dock from '@wawjs/css-prime-themes/material/dock';
import drawer from '@wawjs/css-prime-themes/material/drawer';
import editor from '@wawjs/css-prime-themes/material/editor';
import fieldset from '@wawjs/css-prime-themes/material/fieldset';
import fileupload from '@wawjs/css-prime-themes/material/fileupload';
import floatlabel from '@wawjs/css-prime-themes/material/floatlabel';
import galleria from '@wawjs/css-prime-themes/material/galleria';
import iconfield from '@wawjs/css-prime-themes/material/iconfield';
import iftalabel from '@wawjs/css-prime-themes/material/iftalabel';
import image from '@wawjs/css-prime-themes/material/image';
import imagecompare from '@wawjs/css-prime-themes/material/imagecompare';
import inlinemessage from '@wawjs/css-prime-themes/material/inlinemessage';
import inplace from '@wawjs/css-prime-themes/material/inplace';
import inputchips from '@wawjs/css-prime-themes/material/inputchips';
import inputgroup from '@wawjs/css-prime-themes/material/inputgroup';
import inputnumber from '@wawjs/css-prime-themes/material/inputnumber';
import inputotp from '@wawjs/css-prime-themes/material/inputotp';
import inputtext from '@wawjs/css-prime-themes/material/inputtext';
import knob from '@wawjs/css-prime-themes/material/knob';
import listbox from '@wawjs/css-prime-themes/material/listbox';
import megamenu from '@wawjs/css-prime-themes/material/megamenu';
import menu from '@wawjs/css-prime-themes/material/menu';
import menubar from '@wawjs/css-prime-themes/material/menubar';
import message from '@wawjs/css-prime-themes/material/message';
import metergroup from '@wawjs/css-prime-themes/material/metergroup';
import multiselect from '@wawjs/css-prime-themes/material/multiselect';
import orderlist from '@wawjs/css-prime-themes/material/orderlist';
import organizationchart from '@wawjs/css-prime-themes/material/organizationchart';
import overlaybadge from '@wawjs/css-prime-themes/material/overlaybadge';
import paginator from '@wawjs/css-prime-themes/material/paginator';
import panel from '@wawjs/css-prime-themes/material/panel';
import panelmenu from '@wawjs/css-prime-themes/material/panelmenu';
import password from '@wawjs/css-prime-themes/material/password';
import picklist from '@wawjs/css-prime-themes/material/picklist';
import popover from '@wawjs/css-prime-themes/material/popover';
import progressbar from '@wawjs/css-prime-themes/material/progressbar';
import progressspinner from '@wawjs/css-prime-themes/material/progressspinner';
import radiobutton from '@wawjs/css-prime-themes/material/radiobutton';
import rating from '@wawjs/css-prime-themes/material/rating';
import ripple from '@wawjs/css-prime-themes/material/ripple';
import scrollpanel from '@wawjs/css-prime-themes/material/scrollpanel';
import select from '@wawjs/css-prime-themes/material/select';
import selectbutton from '@wawjs/css-prime-themes/material/selectbutton';
import skeleton from '@wawjs/css-prime-themes/material/skeleton';
import slider from '@wawjs/css-prime-themes/material/slider';
import speeddial from '@wawjs/css-prime-themes/material/speeddial';
import splitbutton from '@wawjs/css-prime-themes/material/splitbutton';
import splitter from '@wawjs/css-prime-themes/material/splitter';
import stepper from '@wawjs/css-prime-themes/material/stepper';
import steps from '@wawjs/css-prime-themes/material/steps';
import tabmenu from '@wawjs/css-prime-themes/material/tabmenu';
import tabs from '@wawjs/css-prime-themes/material/tabs';
import tabview from '@wawjs/css-prime-themes/material/tabview';
import tag from '@wawjs/css-prime-themes/material/tag';
import terminal from '@wawjs/css-prime-themes/material/terminal';
import textarea from '@wawjs/css-prime-themes/material/textarea';
import tieredmenu from '@wawjs/css-prime-themes/material/tieredmenu';
import timeline from '@wawjs/css-prime-themes/material/timeline';
import toast from '@wawjs/css-prime-themes/material/toast';
import togglebutton from '@wawjs/css-prime-themes/material/togglebutton';
import toggleswitch from '@wawjs/css-prime-themes/material/toggleswitch';
import toolbar from '@wawjs/css-prime-themes/material/toolbar';
import tooltip from '@wawjs/css-prime-themes/material/tooltip';
import tree from '@wawjs/css-prime-themes/material/tree';
import treeselect from '@wawjs/css-prime-themes/material/treeselect';
import treetable from '@wawjs/css-prime-themes/material/treetable';
import virtualscroller from '@wawjs/css-prime-themes/material/virtualscroller';

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
} satisfies Preset<MaterialBaseDesignTokens>;
